import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import back from "../assests/signup-account.jpg";
import { FaArrowLeft } from "react-icons/fa";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://filmlocationsapi.onrender.com/api/users/", inputs);
      console.log(res);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate to previous page
  };

  return (
    <div className="auth">
      <div className="container">
      <div className="backImg">
          <img src={back} alt="" />
      </div>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Name*"
          name="name"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email Address*"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password*"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">SIGN UP</button>
        {err && <p>{err.detail}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
          <span onClick={handleGoBack} style={{ cursor: "pointer", color: "grey", marginLeft: "10px" }}>
            <FaArrowLeft /> Go Back
          </span>
        </span>
      </form>
      </div>

    </div>
  );
};

export default Register;
