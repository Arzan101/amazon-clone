import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import Login from './Login';
import { auth } from './firebase';


function Header() {
    const [{cart,user},dispatch] = useStateValue();

    const handleAuthentication =()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
<div className= 'header'>

        <Link to ="/">
         <img className = "header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYL0eHkKhRJTHki453sM14aJ1_ktal8Lt4ag&usqp=CAU" alt="Logo"/>   
        </Link>

         <div className="header__search">
          <input className="header__searchInput" type="text"/>

          <SearchIcon className="header__SearchIcon"/>
        
          
         </div>
    

    <div className="header__nav">
    <Link to = {!user && '/logIn'}>
     <div  onClick={handleAuthentication} className="header__option">
        <span className="header__optionlineOne">
                  {!user ? 'Guest' : user.email}
        </span>
        <span className="header__optionlineTwo" > {user ? 'Sign Out' : 'Sign In'}
        </span>
        </div>
    </Link>
     <div className="header__option">
         <span className="header__optionlineOne">
                Donation
         </span>
        <span className="header__optionlineTwo">
                 Order
        </span>

     </div>

     <div className="header__option">
         <span className="header__optionlineOne">
                   Neareast
         </span>
        <span className="header__optionlineTwo">
                   NGO's
        </span>

     </div>

    </div>
     
    <Link to ="/Checkout">
    <div className="header__optionBasket">
    <ShoppingCartIcon/>
    <span className="header__optionlineTwo header__Basketcount">{cart.length}</span>
    
    </div>
    </Link>

    <Link to ="/FirstPage">
    </Link>

</div>
    )
}

export default Header
