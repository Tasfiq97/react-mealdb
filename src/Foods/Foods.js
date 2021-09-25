import React, { useEffect, useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import Meal from '../Meal/Meal';
import "./Foods.css"

const Foods = () => {
const [foods,setFoods]=useState([])
const [cart,setCart]=useState([]);
const [displaySearch,setDisplaySearch]=useState([])


useEffect(()=>{
    fetch("./food.JSON")
    .then(res=>res.json())
    .then(data=>{setFoods(data.meals)
      setDisplaySearch(data.meals)
    });
},[])

const btnAdd=(mealName)=>{

  const newFood=[...cart,mealName];
  setCart(newFood)

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