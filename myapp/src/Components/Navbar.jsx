import React from "react";
import { Link } from "react-router-dom";
import refreshlogos from "./Images/refreshlogo.png";
import "./Navbar.css";
import "./App.css";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useState } from "react";

const Navbar = () => {
    const [data, setdata] = useState(false);
    const [menu, setMenu] = useState(false);
    
    const inputHandler = () => {
        setdata(!data);
    };

    const menuHandler = () => {
        setMenu(!data)
    }
    return(
        <div>
            <div className="navbar_div">
                <div>
                    <input type="text" placeholder="Search here" className="search"/>
                    <SearchIcon className="search_icon"/>
                   <CloseIcon onClick={inputHandler}className="close_icon"/>
                </div>
                <div>
                    <div className="navbar_main">
                        <div onClick={menuHandler}/>
                        <div>
                            <div>
                            <SearchIcon className="search_icon"/>
                            </div>
                            <MenuIcon onClick={inputHandler}className="menu_icon"/>
                        </div>
                        <div>
                            <img src={refreshlogos} className="heading_logo" alt=""/>
                        </div>
                        <div className="badSearch">
                        <SearchIcon onClick={inputHandler}className="search_icon"/>
                        <LocalMallIcon className="localMall_icon"/>
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