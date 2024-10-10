import React from "react"
import { Link } from "react-router-dom"

import Logo from "../assests/freepik-logo-film-locations-blog.png"

const Natvar = () =>{
    return(
        <div className="navbar">
            <div className="navbar-wrapper">

                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="LOGO"/>
                    </div>
                    <div className="links">
                        <Link className="link" to="/?cat/city">
                        <h6>CITY</h6>
                        </Link>
                        <Link className="link" to="/?cat/buildings">
                        <h6>BUILDINGS</h6>
                        </Link>
                        <Link className="link" to="/?cat/nature">
                        <h6>NATURE</h6>
                        </Link>
                        <Link className="link" to="/?cat/industrial">
                        <h6>INDUSTRIAL</h6>
                        </Link>
                        <Link className="link" to="/?cat/culture">
                        <h6>CULTURE</h6>
                        </Link>
                        <Link className="link" to="/?cat/transport">
                        <h6>TRANSPORT</h6>
                        </Link>
                        <span>Isa</span>
                        <span>Logout</span>
                        <span className="create">
                            <Link className="link" to="/create">Create</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Natvar