import React from "react";
import { Link } from "react-router-dom";
import refreshlogos from "./Images/refreshlogo.jpeg";
import "./Navbar.css"

const Navbar = () => {
    return(
        <div>
            <div className="navbar_div">
                <div>
                    <input type="text" placeholder="Search here"/>
                    {/* search icon */}
                    {/* close icon */}
                </div>
                <div>
                    <div className="navbar_main">
                        <div>
                            <div>
                                {/* search icon */}
                            </div>
                             {/* Menu icon */}
                        </div>
                        <div>
                            <img src={refreshlogos} className="heading_logo" alt=""/>
                        </div>
                        <div className="badSearch">
                             {/* search icon */}
                             {/* local icon */}  
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className="link">Home</Link>
            <Link to="/contact" className="link">Contact</Link>
            <Link to="/privacy" className="link">Privacy</Link>
            <Link to="loginForm" className="link">Login</Link>
            <Link to="/signUp" className="link">SignUp</Link>
        </div>
    )
}

export default Navbar;