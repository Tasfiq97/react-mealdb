import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const FoodCart = (props) => {

const {cart}=props ||{}

    return (
        <div style={{textAlign:"center" , marginTop:"20px"}}>
        
           
           <h3> <FontAwesomeIcon icon={faShoppingBasket}/> :  {cart.length}</h3>
           <ul>
               {
                   cart.map(pd=> <li>{pd.strMeal}</li>)
                  
                   
               }
           </ul>
        </div>
    );
};

export default FoodCart;