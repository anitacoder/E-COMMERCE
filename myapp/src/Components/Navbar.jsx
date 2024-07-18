import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    const [data, setData] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchWidth, setSearchWidth] = useState(150); 
    const [isFocused, setIsFocused] = useState(false); 
    
    const inputHandler = () => {
        setData(!data);
    };

    const menuHandler = () => {
        setMenuOpen(!menuOpen);
    }

    const handleSearchWidth = (event) => {
        setSearchWidth(event.target.value.length * 10); 
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <>
        <div className="navbar_container">
            <div className="navbar_div">
                  <div>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="loginForm" className="link">Login</Link>
                <Link to="/signUp" className="link">SignUp</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
            <div className={`search_container ${isFocused ? 'focused' : ''}`}>
            <SearchIcon className="search_icon_inside" style={{ right: `calc(10px + 100% - ${searchWidth}px)` }} />
            <input type="text" placeholder="Search here" className="search" onChange={handleSearchWidth}/>
                    <CloseIcon onClick={inputHandler} className="close_icon" />
                </div>
                <div>
                    <div className="navbar_main">
                        <div>
                        </div>
                      
                        <div className="badSearch">
                            <ShoppingCartIcon className="localMall_icon" />
                            <MenuIcon onClick={menuHandler} className="menu_icon" />
                        </div>
                </div>
            </div>
            </div>
            {menuOpen && (
                <div className="sidebar">
                    <Link to="/" className="sidebar_link">Home</Link>
                    <Link to="/about" className="sidebar_link">About</Link>
                    <Link to="loginForm" className="sidebar_link">Login</Link>
                    <Link to="/signUp" className="sidebar_link">SignUp</Link>
                    <Link to="/contact" className="sidebar_link">Contact</Link>
                </div>
            )}
        </div>
        </>
    );
};
export default Navbar;
