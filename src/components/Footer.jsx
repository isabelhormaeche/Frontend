import React from "react"
import Logo from "../assests/freepik-logo-film-locations-blog.png"


const Footer = () =>{
    return(
        <footer>
            <img src={Logo} alt="LOGO" />
            <span>© Copyright <b>Film Locations APP 2024</b>. All rights reserved</span>
        </footer>
    )
}

export default Footer