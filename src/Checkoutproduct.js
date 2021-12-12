//CheckoutProduct.js
import React from 'react';
import './Checkoutproduct.css';

function CheckoutProduct({id, title, price, image }) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={image} alt=''/>

            <div className='checkoutProduct--info'>
                <p className='checkoutProduct--title'>{title}</p>
                <p className='checkoutProduct--price'>
                <bold>₹</bold>
                <strong>{price}</strong>
                </p>
                <button>Remove From Cart</button>
            </div>
           
        </div>
    )
}

export default CheckoutProduct