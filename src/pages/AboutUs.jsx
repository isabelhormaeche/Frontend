import React from "react";

import aboutImg from "../assests/toastability.jpg";

const About = () => {
    return (
      <div className="about">
        <h1>About Us</h1>

        <div>
          <img src={aboutImg} alt="people" style={{ width: '100%', height: "600px", marginBottom: '20px' }} />
        </div>
        
        <p>Welcome to <b>Film Locations APP!!</b> We help you discover and explore amazing film locations around the Basque Country.</p>
        <p>Our mission is to provide a comprehensive database of film locations, making it easy for film production companies to work and experience the magic of this land.</p>
        <p>Contact us at: <b>info@filmlocationsREACTapp.com</b></p>
      </div>
    );
  };
export default About;