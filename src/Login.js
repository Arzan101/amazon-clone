import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='login'>
        <Link to = "/">
        <img className = "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"/>  
        </Link> 
            
        </div>
    )
}

export default Login
