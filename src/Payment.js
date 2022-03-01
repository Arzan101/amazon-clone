import React from 'react'
import CheckoutProduct from './Checkoutproduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';

function Payment() {
    const [{cart,user},dispatch] = useStateValue();

  return (
    <div className='payment'>
       <div className='payment--container'>
       {/*delivery address*/}
         <div className='payment--section'>
          <h3>Delivery Address:</h3>
          <div className='payment--address'>
            <p>{user?.email} </p>
            <p>flat 302, Hiranandani</p>
            <p>Powai,india</p>
          </div>

         </div>
           {/*cart review*/}
         <div className='payment--section'>
           <h3>Review your item in Cart :</h3>
            <div className='payment--items'>
            {cart.map( item => (
                <CheckoutProduct
                 id = {item.id}
                 title = {item.title}
                 image = {item.image}
                 price = {item.price}
                /> 
               ))}
            </div>

         </div>
           {/*Payment gateway*/}
         <div className='payment--section'>
          <h3>Payment Methods</h3>
           <div className='payment--details'>
            {/*Stripe secret code*/}
           
           </div>

         </div>

       </div>

    </div>

  )
}

export default Payment