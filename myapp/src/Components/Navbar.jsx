import React from "react";
import { Link } from "react-router-dom";

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
                            <img src="im"/>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="loginForm">Login</Link>
            <Link to="/signUp">SignUp</Link>
        </div>
    )
}

export default Navbar;