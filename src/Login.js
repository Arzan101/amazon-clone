import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

    const {email,setEmail}=useState('')
    const {password,setPassword }=useState('')


    return (
        <div className='login'>
        <Link to = "/">
        <img className = "login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Logo"/>  
        </Link>
        <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
        <h5>E-mail</h5>
        <input Type="text"/>
        <h5>Password</h5>
        <input Type="password"/>
        <button className='login--signButton'>Sign In</button>
        </form>
        <p>
        By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.
        </p>
        <button className='login--registerButton'>Create your Amazon Account</button>
        </div>    
        </div>
    )
}

export default Login
