import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./Checkoutproduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits in Paise
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("User", user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
        <div className="payment">
          <div className="payment--container">
            {/* Delivery Address */}
            <div className="payment--section">
              <div className="payment--title">
                <h3>Delivery Address:</h3>
              </div>
              <div className="payment--address">
                <p>{user?.email}</p>
                <p>Falt No.301, Hiranandani</p>
                <p>Andheri, India</p>
              </div>
            </div>
            {/* Cart Review */}
            <div className="payment--section">
              <div className="payment--title">
                <h3>Review Item in Cart:</h3>
              </div>
              <div className="payment--items"> 
                {cart.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
            {/* Payment Gateway */}
            <div className="payment--section">
              <div className="payment--title">
                <h3>Payment Method:</h3>
              </div>
              <div className="payment--details">
                {/* Stripe Secret Code */}
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <div className="payment--priceContainer">
                            <CurrencyFormat
                              renderText={(value) => (
                                <>
                                  <p>
                                    Subtotal ({cart.length} items):<strong>{value}</strong>{" "}
                                  </p>
                                  
                                </>
                              )}
                              decimalScale={2}
                              value={getCartTotal(cart)}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₹"}
                            />
                            <button className="payment--button" disabled = {processing || disabled || succeeded}> 
                                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                  </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default Payment;