import React from "react";
// import Slider from "react-slick";
import "./Home.css";

const Home = () => {
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
                    <h1>Skincare</h1>
                    <p>Discover our range of skincare products designed to keep your skin healthy and radiant. From cleansers to moisturizers, we have everything you need for a perfect skincare routine.</p>
                    <button className="skincarebtn">Shop Skincare</button>
                </div>
                <h2>Products</h2>
            </div>
        </div>
    );
}

export default Home;
