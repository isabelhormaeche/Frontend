import React, { useContext , useState} from "react"
import { Link, useNavigate} from "react-router-dom";

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
              <input type="text" placeholder="Email*" name="email" />
              <input type="password"placeholder="Password*"name="password" />
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