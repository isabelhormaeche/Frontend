import React from "react"
import { Link } from "react-router-dom";

const Register= () =>{
    return(
      <div className="auth">
        {/* TODO add background image of sing up?????******* */}
        <h1>REGISTER</h1>
        <form>
            <input required type="text" placeholder="Username*"/>
            <input required type="email" placeholder="Email Address*"/>
            <input required type="password"placeholder="Password*"/>
            <button>SIGN UP</button> 
            <p>Error message!</p>  
            <span>Do you have an account? <Link to="/login">Login</Link>
            </span>
        </form>
      </div>
    );
};

export default Register