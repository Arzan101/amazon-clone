import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './Checkoutproduct';
import "./Payment.css"
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{cart,user},dispatch] = useStateValue();

    const stripe= useStripe();
    const elements = useElements();

    const [error,setError]= useState(null);
    const[disabled, setDisabled]= useState(true);
    const[processing, setProcessing]=useState("");
    const [succeeded, setSucceeded] =useState(false);

    useEffect(()=>{
      //generate the special stripe secret which allows to charge a customer
      const getClientSecret= async()=>{
         const response = await axios;
      }
      getClientSecret();
    },[cart])

    const handleSubmit= async (event)=>{
      event.preventDefault();
      setProcessing(true);
      
      //const payload = await stripe()
    };

    const handleChange =(event)=>{
      setDisabled(event.empty);
      setError(event.error ? event.error.message :"");
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
          <h3>Payment Method :</h3>
           <div className='payment--details'>
            {/*Stripe secret code*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
               <div className='payment--priceContainer'>
               <CurrencyFormat 
               renderText = {(value) => (
                <div>
                      <p>Subtotal ({cart.length} items):<strong>{value}</strong> </p>
                      <small className="subtotal--gift">
                          <input type="checkbox" /> This order contains a gift
                      </small>
                </div>
               )}
               decimalScale = {2}
               value = {getCartTotal(cart)}
               displayType = {"text"}
               thousandSeparator = {true}
               prefix = {"₹"}
            />     
            <button disabled = {processing || disabled || succeeded}>
             <span>{processing ? <p>processing</p>: "Buy now"}</span>
            </button>
          </div>
               {/*error*/}
               {error && <div>{error}</div>}

               
            
            </form>
           
           </div>

         </div>

       </div>

    </div>

  )
}

export default Payment