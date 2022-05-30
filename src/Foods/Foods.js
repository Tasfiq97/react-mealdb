import React, { useEffect, useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import { addToDb, getDb } from '../LOCAL STOARAGE/Storage';
import Meal from '../Meal/Meal';
import "./Foods.css"

const Foods = () => {
const [foods,setFoods]=useState([])
const [cart,setCart]=useState([]);
const [displaySearch,setDisplaySearch]=useState([])


useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
    .then(res=>res.json())
    .then(data=>{setFoods(data.meals)
      setDisplaySearch(data.meals)
    });
},[])
useEffect(()=>{
  if(foods.length){
    const savedDb=getDb();
   const saveOrder=[]
   for (const order in savedDb){
         const orderId=foods.find((ml)=>ml.strMeal===order)
        const quantity=savedDb[order]
         orderId.quantity=quantity;
          saveOrder.push(orderId);
          
   }
   setCart(saveOrder)
  }
},[foods])

const btnAdd=(mealName)=>{
   mealName.quantity=1
  const newFood=[...cart,mealName];
  setCart(newFood)
  addToDb(mealName.strMeal)

}

const handleSearch=(event)=>{
    const searchText=event.target.value;
    const searchResult=foods.filter(food=>food.strMeal.toLowerCase().includes(searchText));
    setDisplaySearch(searchResult)
}


    return (
      <div>
        <div className="search-container">
          <input
          onChange={handleSearch}
           type="text" placeholder="search food" />
        </div>
        <div className="all-food">
          
            <div className="food-details">
            <h1>All Foods</h1>
            <div className="food-card">
              {
                  displaySearch.map(food=><Meal 
                    key={food.idMeal}
                    food={food}
                    selectBtn={btnAdd}
                     ></Meal>)
              }
            </div>

          </div>
            <div className="food-name">
                <FoodCart
               cart={cart} ></FoodCart>
            </div>
        </div>
        </div>
    );
};

export default Foods;