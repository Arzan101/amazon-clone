import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51KZRkQSHV4CwkIjNz1qcBXbXwvaK1rQEa0o8n9HW8tUb2wQHkOpD6WTdxBCPYn3cOfDRIFrnL0giHZOrnMJfdZfF00S0Uqmqfp');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    //will only run once when app component is loaded.
    auth.onAuthStateChanged(
      authUser => {
        console.log('THE USER IS :', authUser);
      if (authUser){
        //user just logged in / user was logged in
        dispatch(
          {
            type: 'SET_USER',
            user: authUser
          }
        )
      }
      else{
        //user logged out
        dispatch(
          {
            type: 'SET_USER',
            user: null
          }
        )
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/checkout">
                      <Header />
                      <Checkout /> 
              </Route>
              <Route path="/payment">
                      <Header />
                      <Elements stripe ={promise}>
                      <Payment />
                      </Elements>
              </Route>
              <Route path="/">
                      <Header />
                      <Home />
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;