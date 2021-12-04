import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id ,title,price,image})
{
 const [{cart}, dispatch]=useStateValue();

 const addTocart=()=>{


    dispatch( {
       type:"ADD_TO_CART",
       item:{
          id:id,
         title:title,
         price:price,
         image:image,

       }


       

    }
    );
 }
    return (
    <div className="product">
        
      <div className="product__info">
        <p>{title}</p>
        

        <p className="product__price">
        <bold>₹</bold>
        <strong>{price}</strong>
        </p>
            
         <img className="product__img" src={image} alt="" /> 

      </div>

         <button className="product__button" onClick = {addTocart} >Add to Cart</button>  
      
    </div>
            
       
    )
}

export default Product;
