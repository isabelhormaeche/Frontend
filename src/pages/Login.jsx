import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import back from "../assests/signup-account.jpg";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", new URLSearchParams({
        username: username,
        password: password,
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      localStorage.setItem("token", response.data.access_token);
      login();
      navigate("/");
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="backImg">
          <img src={back} alt="" />
        </div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username*"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">SIGN IN</button>
          {error && <p>{error}</p>}
          <span>
            Don't you have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
