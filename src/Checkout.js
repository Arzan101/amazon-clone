//checkout.js
import userEvent from "@testing-library/user-event";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./Checkoutproduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{cart, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout--left">
          <img className="checkout--adv" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcXAL5QVQ5r1NiayiIWgWdx_Mh5h8bVYcq6X8ao5YCo7HKjGhBhnKjshS5XGO4WXu4Ms&usqp=CAU" alt="adv" />
        <div>
            <h2>Welcome, {user?.email}</h2>


          <h3 className="checkout--title">Your Donation Details</h3>
          
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

      <div className="checkout--right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;