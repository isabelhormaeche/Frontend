import React from "react"
import { Link } from "react-router-dom";
import back from "../assests/signup-account.jpg";


const Login = () =>{
    return(
      <div className="auth">
 {/* backgroung image banner**** TODO Add text overlay ????? */}
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            </div>
{/* ************************************************* */}
          <h1>LOGIN</h1>
          <form>
              <input type="text" placeholder="Username*"/>
              <input type="password"placeholder="Password*"/>
              <button>SIGN IN</button> 
              <p>Error message!</p>  
              <span>Dont you have an account? <Link to="/register">Register</Link>
              </span>
          </form>
        </div>
      </div>
    );
};

export default Login