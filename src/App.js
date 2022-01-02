import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
    //will only run once when app component is loaded.
    auth.onAuthStateChanged(
      authUser => {
        console.log('THE USER IS :', authUser);
     
      if (authUser){
        //user just logedIn/user was logedIn
        dispatchEvent({
          type:'Set_User',
          user:authUser

        })
      }
      else{
          //user logged out
        dispatchEvent({
          type:'Set_User',
          user:null

        })
      }
    })
  }, [])

  
  return (
   <Router>
    <div className="app">
     <Switch>
     <Route path="/Login">
     <Login />
      </Route>
      <Route path="/checkout">
         <Header />
         <Checkout/>
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
