import React, { useState } from "react";
import { Link } from "react-router-dom";
import refreshlogos from "./Images/refreshlogo.png";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Header from "./Header"

const Navbar = () => {
    const [data, setData] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const inputHandler = () => {
        setData(!data);
    };

    const menuHandler = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <Header/>
        <div>
            <div className="navbar_div">
                  <div>
                <Link to="/" className="link">Home</Link>
                <Link to="/contact" className="link">Contact</Link>
                <Link to="/privacy" className="link">Privacy</Link>
                <Link to="loginForm" className="link">Login</Link>
                <Link to="/signUp" className="link">SignUp</Link>
            </div>
                <div>
                    <SearchIcon className="search_icon_inside" />
                    <input type="text" placeholder="Search here" className="search" />
                    <CloseIcon onClick={inputHandler} className="close_icon" />
                </div>
                <div>
                    <div className="navbar_main">
                        <div>
                        </div>
                        <div>
                            <img src={refreshlogos} className="heading_logo" alt="" />
                        </div>
                        <div className="badSearch">
                            <LocalMallIcon className="localMall_icon" />
                            <MenuIcon onClick={menuHandler} className="menu_icon" />
                        </div>
                </div>
            </div>
            </div>
            {menuOpen && (
                <div className="sidebar">
                    <Link to="/" className="sidebar_link">Home</Link>
                    <Link to="/contact" className="sidebar_link">Contact</Link>
                    <Link to="/privacy" className="sidebar_link">Privacy</Link>
                    <Link to="loginForm" className="sidebar_link">Login</Link>
                    <Link to="/signUp" className="sidebar_link">SignUp</Link>
                </div>
            )}
        </div>
        </>
    );
};
export default Navbar;
