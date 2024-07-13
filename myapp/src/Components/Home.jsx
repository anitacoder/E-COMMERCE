// Home.js
import React, { useRef, useContext } from "react";
import { CartContext } from "./CartContext";
import "./Home.css";
import faceWashImage from "./Images/simple_faceWash.png";
import glycolicAcid from "./Images/glycolic_acid.png";
import TheOrdinary from "./Images/TheOrdinarySerum.png";
import CeraVe from "./Images/ceraVe.jpeg";
import neutrogena from "./Images/neturogenerFaceWash.png";
import LaRochePosay from "./Images/la-roche.png";
import PaulaChoice from "./Images/paula_sChoice.png";
import Nivea from "./Images/nivea.png";

const Home = () => {
    const productSectionRef = useRef(null);
    const { addToCart } = useContext(CartContext);

    const handleShopSkincareClick = () => {
        productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    return (
        <div className="home_header">
            <div className="data">
                <div className="header_container">
                    <h1 className="skin_text">Skincare</h1>
                    <p className="product-text">Discover our range of skincare products designed to keep your skin healthy and radiant. From cleansers to moisturizers, we have everything you need for a perfect skincare routine.</p>
                    <button className="skincarebtn" onClick={handleShopSkincareClick}>Shop Skincare</button>
                </div>
                <h2 className="products" ref={productSectionRef}>Products</h2>
                <div className="box">
                    <div className="box1">
                        <img src={faceWashImage} alt="Face Wash" className="faceWash" />
                        <p className="product-txt">Simple</p>
                        <h1 className="product-heading">Moisturising face wash</h1>
                        <p className="product-t1">For a glowing skin</p>
                        <button className="add" onClick={() => handleAddToCart({ name: 'Moisturising face wash', brand: 'Simple', price: 10 })}>Add to cart</button>
                    </div>
                    <div className="box2">
                        <img src={glycolicAcid} alt="Acid" className="facewash" />
                        <p className="product-txt1">Glycolic Acid</p>
                        <h1 className="product-heading1">Exfoliating Treatment</h1>
                        <p className="product-t">For a brighter complexion</p>
                        <button className="add" onClick={() => handleAddToCart({ name: 'Exfoliating Treatment', brand: 'Glycolic Acid', price: 15 })}>Add to cart</button>
                    </div>
                    <div className="box3">
                        <img src={TheOrdinary} alt="Ordinary" className="facewash2" />
                        <p className="product-txt2">The Ordinary</p>
                        <h1 className="product-heading2">Hydrating Cleanser</h1>
                        <p className="product-t2">For a balanced skin</p>
                        <button className="add1" onClick={() => handleAddToCart({ name: 'Hydrating Cleanser', brand: 'The Ordinary', price: 12 })}>Add to cart</button>
                    </div>
                    <div className="box4">
                        <img src={CeraVe} alt="Face Wash" className="faceWash" />
                        <p className="product-txt7">CeraVe</p>
                        <h1 className="product-heading7">Hydrating Cleanser</h1>
                        <p className="product-t6">For a normal dry skin</p>
                        <button className="add" onClick={() => handleAddToCart({ name: 'Hydrating Cleanser', brand: 'CeraVe', price: 14 })}>Add to cart</button>
                    </div>
                </div>
                <div className="box_2">
                    <div className="box10">
                        <img src={neutrogena} alt="Face Wash" className="faceWash" />
                        <p className="product-txt1">Neutrogena</p>
                        <h1 className="product-heading">Hydro Boost water gel</h1>
                        <p className="product-t3">For intense hydration</p>
                        <button className="add" onClick={() => handleAddToCart({ name: 'Hydro Boost water gel', brand: 'Neutrogena', price: 18 })}>Add to cart</button>
                    </div>
                    <div className="box11">
                        <img src={LaRochePosay} alt="Face Wash" className="faceWash" />
                        <p className="product-txt4">La Roche-Posay</p>
                        <h1 className="product-heading4">Toleriane Cleanser</h1>
                        <p className="product-t1">For sensitive skin</p>
                        <button className="add" onClick={() => handleAddToCart({ name: 'Toleriane Cleanser', brand: 'La Roche-Posay', price: 16 })}>Add to cart</button>
                    </div>
                    <div className="box12">
                        <img src={PaulaChoice} alt="Face Wash" className="faceWash" />
                        <p className="product-txt5">Paula Choice</p>
                        <h1 className="product-heading5">BHA Exfoliant</h1>
                        <p className="product-t4">For clear skin</p>
                        <button className="add" onClick={() => handleAddToCart({ name: 'BHA Exfoliant', brand: 'Paula Choice', price: 20 })}>Add to cart</button>
                    </div>
                    <div className="box13">
                        <img src={Nivea} alt="Face Wash" className="faceWash3" />
                        <p className="product-txt6">Nivea</p>
                        <h1 className="product-heading6">Moisturizing Face Wash</h1>
                        <p className="product-t5">For refreshed skin</p>
                        <button className="add2" onClick={() => handleAddToCart({ name: 'Moisturizing Face Wash', brand: 'Nivea', price: 11 })}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
