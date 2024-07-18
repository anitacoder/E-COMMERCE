import React, {useRef} from "react";
import "./Home.css";
import faceWashImage from "./Images/simple_faceWash.png";
import glycolicAcid from "./Images/glycolic_acid.png";
import TheOrdinary  from "./Images/TheOrdinarySerum.png";
import CeraVe from "./Images/ceraVe.jpeg";
import neutrogena from "./Images/neturogenerFaceWash.png";
import LaRochePosay from "./Images/la-roche.png";
import PaulaChoice from "./Images/paula_sChoice.png";
import Nivea from "./Images/nivea.png";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';


const Home = () => {
    const renderStar = (ratings) => {
        const stars = [];
        for(let i = 0; i < 5; i++){
            stars.push(i < ratings ? <StarIcon key={i}/> : <StarBorderIcon key={i}/>)
        }
        return stars;
    };
    const productSectionRef = useRef(null);

    const handleShopSkincareClick = () => {
        productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <><div className="home-content">
            <h6>Health Skin <br></br>without<br></br>harm to Nature</h6>
        </div><div className="home_header">
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
                            <div className="box1-content">
                                <h5 className="price">$25.00</h5>
                                <div className="ratings">
                                    {renderStar(5)}
                                </div>
                            </div>
                            <button className="add4">Add to cart</button>
                        </div>
                        <div className="box2">
                            <img src={glycolicAcid} alt="Acid" className="facewash" />
                            <p className="product-txt1">Glycolic Acid</p>
                            <h1 className="product-heading1">Exfloiating Treatment</h1>
                            <p className="product-t">For a brighter complexion</p>
                            <div className="box1-content">
                                <h5 className="price">$25.00</h5>
                                <div className="ratings">
                                    {renderStar(4)}
                                </div>
                            </div>
                            <button className="add4">Add to cart</button>
                        </div>
                        <div className="box3">
                            <img src={TheOrdinary} alt="Ordinary" className="facewash2" />
                            <p className="product-txt2">The Ordinary</p>
                            <h1 className="product-heading2">Hydrating Cleanser</h1>
                            <p className="product-t2">For a balanced skin</p>
                            <div className="box1-content">
                                <h5 className="prices">$25.00</h5>
                                <div className="rates">
                                    {renderStar(3)}
                                </div>
                            </div>
                            <button className="add1">Add to cart</button>
                        </div>
                        <div className="box4">
                            <img src={CeraVe} alt="Face Wash" className="faceWash" />
                            <p className="product-txt6">CeraVe</p>
                            <h1 className="product-heading7">Hydrating Cleanser</h1>
                            <p className="product-t5">For a normal dry skin</p>
                            <div className="box1-content">
                                <h5 className="price">$25.00</h5>
                                <div className="ratings">
                                    {renderStar(4)}
                                </div>
                            </div>
                            <button className="add4">Add to cart</button>
                        </div>
                    </div>
                    <div className="box_2">
                        <div className="box10">
                            <img src={neutrogena} alt="Face Wash" className="faceWash" />
                            <p className="product-txt1">Neutrogena</p>
                            <h1 className="product-heading">Hydro Boost water gel</h1>
                            <p className="product-t3">For intense hydration</p>
                            <div className="box1-content">
                                <h5 className="price">$25.00</h5>
                                <div className="ratings">
                                    {renderStar(3)}
                                </div>
                            </div>
                            <button className="add4">Add to cart</button>
                        </div>
                        <div className="box11">
                            <img src={LaRochePosay} alt="Face Wash" className="faceWash" />
                            <p className="product-txt4">La Roche-Posay</p>
                            <h1 className="product-heading4">Toleriane Cleanser</h1>
                            <p className="product-t1">For sensitive skin</p>
                            <div className="box1-content">
                                <h5 className="price">$25.00</h5>
                                <div className="ratings">
                                    {renderStar(5)}
                                </div>
                            </div>
                            <button className="add4">Add to cart</button>
                        </div>
                        <div className="box12">
                            <img src={PaulaChoice} alt="Face Wash" className="faceWash" />
                            <p className="product-txt5">Paula Choice</p>
                            <h1 className="product-heading5">BHA Exfoliant</h1>
                            <p className="product-t4">For clear skin</p>
                            <div className="box1-content">
                                <h5 className="price">$25.00</h5>
                                <div className="ratings">
                                    {renderStar(4)}
                                </div>
                            </div>
                            <button className="add4">Add to cart</button>
                        </div>
                        <div className="box13">
                            <img src={Nivea} alt="Face Wash" className="faceWash3" />
                            <p className="product-txt6">Nivea</p>
                            <h1 className="product-heading6">Moisturizing Face Wash</h1>
                            <p className="product-t5">For refreshed skin</p>
                            <div className="box1-content">
                                <h5 className="price">$25.00</h5>
                                <div className="ratings">
                                    {renderStar(3)}
                                </div>
                            </div>
                            <button className="add2">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default Home;
