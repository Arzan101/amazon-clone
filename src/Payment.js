import React from 'react'
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
            <p>{user?.email}</p>
            <p>flat 302, Hiranandani</p>
            <p>Powai,india</p>
          </div>

         </div>
           {/*cart review*/}
         <div className='payment--section'>

         </div>
           {/*Payment gateway*/}
         <div className='payment--section'>

         </div>

       </div>

    </div>

  )
}

export default Payment