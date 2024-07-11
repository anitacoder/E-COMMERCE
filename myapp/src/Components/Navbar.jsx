import React from "react";
import { Link } from "react-router-dom";
import refreshlogos from "./Images/refreshlogo.png";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return(
        <div>
            <div className="navbar_div">
                <div>
                    <input type="text" placeholder="Search here" className="search"/>
                    <SearchIcon className="search_icon"/>
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
          <div>
          <Link to="/" className="sidebar_link">Home</Link>
          <Link to="/contact" className="sidebar_link">Contact</Link>
          <Link to="/privacy" className="sidebar_link">Privacy</Link>
          <Link to="loginForm" className="sidebar_link">Login</Link>
          <Link to="/signUp" className="lsidebar_link">SignUp</Link>
      </div>
        </div>
       
    )
}

export default Navbar;