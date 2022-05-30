import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'

import "./Meal.css"

const Meal = ({food,selectBtn}) => {
    const {strMeal,strMealThumb,strArea,strCategory,strInstructions}=food;
    
    return (
        <div className="food-cards">
            <div className="card-item">
            <img src={strMealThumb} alt="" />
            <div className="info">
           <h1>{strMeal}</h1>
           <p>area Found: {strArea}</p> 
           <p>Category: {strCategory}</p>
           <p>{strInstructions.slice(0,200)}</p>
           <button className="btn-select" onClick={()=>selectBtn(food)}>
             <FontAwesomeIcon icon={faUtensilSpoon}/>  
                Select Meal</button>
           </div>
           </div>
           
          
        </div>
    );
};

export default Meal;