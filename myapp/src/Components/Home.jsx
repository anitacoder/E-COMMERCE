import React, {useRef} from "react";
// import Slider from "react-slick";
import "./Home.css";
import faceWashImage from "./Images/simple_faceWash.png";
import glycolicAcid from "./Images/glycolic_acid.png"
import TheOrdinary  from "./Images/TheOrdinarySerum.png"

const Home = () => {
    const productSectionRef = useRef(null);

    const handleShopSkincareClick = () => {
        productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const settings =  {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
    };

    const images = [
        "Images/bodyCream.webp",
        "path/to/your/image2.jpg",
        "path/to/your/image3.jpg",
    ];

    return (
        <div className="home_header">
            {/* <Slider {...settings}>
                {images.map((image, index) =>(
                    <div key={index}>
                        <img src={image} alt={`slide-${index}`} className="slide_image"/>
                    </div>
                ))}
            </Slider> */}
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
                    <button className="add">Add to cart</button>
                    </div>
                    <div className="box2">
                    <img src={glycolicAcid} alt="Acid" className="facewash" /> 
                    <p className="product-txt1">Glycolic Acid</p>
                    <h1 className="product-heading1">Exfloiating Treatment</h1>
                    <p className="product-t">For a brighter complexion</p>
                    <button className="add">Add to cart</button>
                    </div>
                    <div className="box3">
                    <img src={TheOrdinary} alt="Ordinary" className="facewash2" /> 
                    <p className="product-txt2">The Ordinary</p>
                    <h1 className="product-heading2">Hydrating Cleanser</h1>
                    <p className="product-t2">For a balanced skin</p>
                    <button className="add1">Add to cart</button>
                    </div>
                    <div className="box4">
                    <img src={faceWashImage} alt="Face Wash" className="faceWash" /> 
                    <p className="product-txt">Simple</p>
                    <h1 className="product-heading">Moisturising face wash</h1>
                    <p className="product-t">For a glowing skin</p>
                    <button className="add">Add to cart</button>
                    </div>
                </div>
                <div className="box_2">
                    <div className="box10">
                    <img src={faceWashImage} alt="Face Wash" className="faceWash" /> 
                    <p className="product-txt">Simple</p>
                    <h1 className="product-heading">Moisturising face wash</h1>
                    <p className="product-t">For a glowing skin</p>
                    <button className="add">Add to cart</button>
                    </div>
                    <div className="box11">
                    <img src={faceWashImage} alt="Face Wash" className="faceWash" /> 
                    <p className="product-txt">Simple</p>
                    <h1 className="product-heading">Moisturising face wash</h1>
                    <p className="product-t">For a glowing skin</p>
                    <button className="add">Add to cart</button>
                    </div>
                    <div className="box12">
                    <img src={faceWashImage} alt="Face Wash" className="faceWash" /> 
                    <p className="product-txt">Simple</p>
                    <h1 className="product-heading">Moisturising face wash</h1>
                    <p className="product-t">For a glowing skin</p>
                    <button className="add">Add to cart</button>
                    </div>
                    <div className="box13">
                    <img src={faceWashImage} alt="Face Wash" className="faceWash" /> 
                    <p className="product-txt">Simple</p>
                    <h1 className="product-heading">Moisturising face wash</h1>
                    <p className="product-t">For a glowing skin</p>
                    <button className="add">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
