import React, { useState } from "react";
import axios from 'axios';
import s from './Login.module.css';
import { NavLink, useNavigate } from "react-router-dom";

const Login = props => {

  const navigation = useNavigate();

  const [error, setError] = useState(false);

    const doLogin = e =>{
        console.log('called')
        e.preventDefault()
        axios.post('user/login',{"userid":document.getElementById("username").value,"password":document.getElementById("password").value})
        .then(resp => {
            const token = resp.data.response
            if (token && token.toLowerCase() !== 'invalid credentials') {
              setError(false)
              localStorage.setItem("token",token)
              navigation('/')
            } else {
              setError(true);
            }
        })
        .catch(err => {
          console.log(err)
          setError(true)
        })
    }
    return ( 
      <div className={s.root}>
        <div class={s.loginpage}>
            <div class={s.form}>
                <form class={s.loginForm} onSubmit={doLogin}>
                    <img src="/images/logo.jpg" alt="logo" style={{ width: 180, marginBottom: 32}}/>
                    <input type="text" placeholder="username" id="username" required/>
                    <input type="password" placeholder="password" id="password" required/>
                    <button>login</button>
                    <span>Don't have an account ? create one <NavLink style={{ color: '#0076ff'}} to="/user/register">create account</NavLink></span>
                    {error && <p id="message">Username or Password is wrong</p> }
                </form>
            </div>
        </div>
      </div>

     );
}
 
export default Login;