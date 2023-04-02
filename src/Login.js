import React, {useState} from 'react'
import { Link ,useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from "./firebase"


function Login() {
    const history = useHistory();
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const signIn= e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                if(auth){
                history.push('/')
                }
            })
         .catch(error => alert(error.message))
    }

    const register = e=>{
        e.preventDefault();

        auth 
            .createUserWithEmailAndPassword(email,password)
            .then ((auth)=>{
               history.push("./");
            })
            .catch(error=>{
               alert(error.message)
            })
    }




    return (
        <div className='login'>
        <Link to = "/">
        <img className = "login__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYL0eHkKhRJTHki453sM14aJ1_ktal8Lt4ag&usqp=CAU" alt="Logo"/>  
        </Link>
        <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
        <h5>E-mail</h5>
        <input Type="text" value={email} onChange={e=>{setEmail(e.target.value)}} />
        <h5>Password</h5>
        <input Type="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
        <button type='submit' onClick={signIn} className='login--signButton'>Sign In</button>
        </form>
        <p>
        By creating an account or logging in, you agree to Conditions of Use and Privacy Policy.
        </p>
        <button type='submit' onClick={register} className='login--registerButton'>Create your Account</button>
        </div>    
        </div>
    )
}

export default Login
