import React from "react"
import { Link } from "react-router-dom";

const Login = () =>{
    return(
      <div className="auth">
        <h1>LOGIN</h1>
        <form>
            <input type="text" placeholder="Username"/>
            <input type="password"placeholder="Password"/>
            <button>SIGN IN</button> 
            <p>Error message!</p>  
            <span>Dont you have an account? <Link to="/register">Register</Link>
            </span>
        </form>
      </div>
    );
};

export default Login