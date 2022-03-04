import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import CheckoutProduct from './Checkoutproduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';

function Payment() {
    const [{cart,user},dispatch] = useStateValue();

    const stripe= useStripe();
    const elements = useElements();

    const handleSubmit= e=>{

    }

    const handleChange =e=>{
      
    }


  return (
    <div className='payment'>
       <div className='payment--container'>
       {/*delivery address*/}
         <div className='payment--section'>
          <div className='payment--title'>
          <h3>Delivery Address:</h3>
          </div>
          <div className='payment--address'>
            <p>{user?.email} </p>
            <p>flat 302, Hiranandani</p>
            <p>Powai,india</p>
          </div>

         </div>
           {/*cart review*/}
         <div className='payment--section'>
           <div className='payment--title'>
           <h3>Review your item in Cart :</h3>
           </div>  
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>

            
            </form>
           
           </div>

         </div>

       </div>

    </div>

  )
}

export default Payment