import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const FoodCart = (props) => {

const {cart}=props ||{}
console.log(cart)

const total=cart.reduce((preVal,currVal)=>preVal+ currVal.quantity,0)


    return (
        <div style={{textAlign:"center" , marginTop:"20px"}}>
        
           
           <h3> <FontAwesomeIcon icon={faShoppingBasket}/> :  {total}</h3>
           <ul>
               {
                   cart.map(pd=><li key={pd.strTags}>{pd.strMeal}</li>)
                  
                   
               }
           </ul>
        </div>
    );
};

export default FoodCart;