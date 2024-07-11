import React from "react";
import "./Home.css";
import headerImage from "./Images/men-shampoo.jpg"
import cart from "./cart"

const Home = () => {
    return(
        <div className="home_header">
            <img src={headerImage} className="home_logo" alt="" />
            <div className="data">
            <div className="header_container">
                <h1>Hairs</h1>
                <p>Start from the top. We've got you covered with a range of formulas to keep your hair in tip-top shape and your style in mint condition</p>
                <button className="shampoobtn">Shop Shampoo</button>
            </div>
        </div>
        <cart/>
        </div>
    )
}

export default Home;