import React from 'react'
import './Product.css'

function Product({id,title,price,image,txt})
 {
    return (
    <div className="product">
        
      <div className="product__info">
        <p>{title}</p>
        

        <p className="product__price">
        <bold>₹</bold>
        <strong>{price}</strong>
        <p>{txt}</p>
        </p>
            
         <img className="product__img" src={image} alt="" /> 

      </div>

         <button className="product__button">Add to Cart</button>  
      
    </div>
            
       
    )
}

export default Product
