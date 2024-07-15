import React, { useState, useEffect } from "react";
import "./about.css";
import neutrogena from "./Images/neturogenerFaceWash.png";
import moisturizing from "./Images/moisturizing_cream.png";
import serum from "./Images/serum.png";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const testimonialsData = [
    {
        text: "I was skeptical at first, but their anti-aging serum has really reduced the appearance of my fine lines and wrinkles.",
        author: "Sarah L.",
        rating: 5
    },

    {
        text: "Their cleansers are so gentle yet effective. My skin feels so clean and refreshed after every use.",
        author: "Mark T.",
        rating: 4
    },

    {
        text: "The hydrating creams have done wonders for my dry skin. I highly recommend them to anyone struggling with dryness.",
        author: "Micheal W.",
        rating: 3
    },

    {
        text:"I love how their products are made from natural ingredients. My skin feels healthier and more radiant.",
        author: "Emily S.",
        rating: 5
    },
]

const renderStars = (rating) => {
    const stars = [];
    for(let i = 0; i < 5; i++){
        stars.push(i < rating ? <StarIcon key={i}/> : <StarBorderIcon key={i}/>)
    }
    return stars;
};

const About = () => {
    const [currentTestimonials, setCurrentTestimonials] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonials((preTestimonial) => 
            preTestimonial === testimonialsData.length - 1 ? 0 : preTestimonial + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <><div>
            <div className="about-top-content">
            </div>
        <div className="about-container">
                <h1 className="about-title">About Us</h1>
                <p className="about-intro">
                    Welcome to our skincare product page. We are dedicated to helping you achieve healthier and radiant skin. Our range of products is curated to meet your skincare needs. Whether you are looking for gentle cleansers, hydrating moisturizers, or specialized treatments, we have you covered.
                </p>
                <h2 className="section-title">Our Commitment to Quality</h2>
                <p className="section-content">
                    We prioritize quality and efficacy in every product we offer. Each item undergoes rigorous testing and is crafted using premium ingredients known for their beneficial effects on skin health.
                </p>

                <h2 className="section-title2">Our Mission</h2>
                <p className="section-content">
                    Our mission is to provide you with the highest quality skincare products that deliver real results. We believe in transparency, integrity, and the power of nature combined with science to create products that truly enhance your skin's health and appearance.
                </p>

                <h2 className="section-title3">Discover Our Range</h2>
                <div className="section1">
                    <div className="product-category1">
                        <h3 className="product-title">Cleansers</h3>
                        <p className="product-description">
                            Our cleansers effectively remove impurities while being gentle on the skin. Discover the perfect cleanser for your skin type and enjoy a fresh, clean feeling every day.<br></br><br></br>Using natural and scientifically-backed ingredients, our cleansers not only purify but also nourish your skin. Experience the benefits of ingredients like hyaluronic acid for hydration, salicylic acid for exfoliation, and aloe vera for soothing. Each cleanser is formulated to maintain the skin's natural barrier, ensuring your face feels soft, smooth, and revitalized after every wash.<br></br>     Incorporate our cleansers into your daily skincare routine for optimal results.
                        </p>
                    </div>
                    <img src={neutrogena} alt="Face Wash" className="FaceWash1" />
                </div>
                <div className="section2">
                    <img src={moisturizing} alt="Face Wash" className="FaceWash" />
                    <div className="product-category">
                        <h3 className="product-title">Moisturizers</h3>
                        <p className="product-description">
                            Hydration is essential for maintaining skin health. Explore our selection of moisturizers, ranging from lightweight lotions to intensive hydrating creams. These products are formulated to replenish moisture and restore skin's natural barrier for a supple and youthful appearance. <br></br><br></br>Our moisturizers are designed to suit various skin types and concerns. Whether you have dry, oily, combination, or sensitive skin, we have the perfect moisturizer to meet your needs. Infused with nourishing ingredients such as hyaluronic acid, ceramides, and natural botanical extracts, our moisturizers provide long-lasting hydration without clogging pores or causing irritation.
                        </p>
                    </div>
                </div>
                <div className="section3">
                    <div className="product-category2">
                        <h3 className="product-title">Treatments and Serums</h3>
                        <p className="product-description">
                            Enhance your skincare routine with our targeted treatments and serums. Whether you're addressing signs of aging, uneven skin tone, or acne-prone skin, our specialized formulations deliver potent ingredients to achieve visible results.<br></br><br></br>Incorporate our treatments and serums into your daily skincare regimen for optimal results. Apply them after cleansing and toning, and before moisturizing, to allow the active ingredients to absorb fully and deliver maximum benefits. Whether you're targeting specific concerns or looking to maintain overall skin health, our range of treatments and serums will help you achieve your skincare goals.
                        </p>
                    </div>
                    <img src={serum} alt="Face Wash" className="FaceWash1" />
                </div>
                <h2 className="section-title4">Why Choose Us?</h2>
                <ul className="why-choose-us-list">
                    <li className="why-choose-us-item">
                        <h4>Premium Ingredients</h4>
                        <p>We use only the finest, natural ingredients that are scientifically proven to benefit your skin.</p>
                        <div className="rating">
                        </div>
                    </li>
                    <li className="why-choose-us-item2">
                        <h4>Rigorous Testing</h4>
                        <p>All our products undergo stringent testing to ensure they are safe and effective for all skin types.</p>
                    </li>
                    <li className="why-choose-us-item3">
                        <h4>Expert Formulations</h4>
                        <p>Our products are developed by skincare experts who understand the complexities of different skin types and concerns.</p>
                    </li>
                </ul>
                <ul className="why-choose-us-list1">
                    <li className="why-choose-us-item">
                        <h4>Eco-Friendly Packaging</h4>
                        <p>We are committed to sustainability, using eco-friendly packaging to reduce our environmental impact.</p>
                    </li>
                    <li className="why-choose-us-item2">
                        <h4>Cruelty-Free</h4>
                        <p>None of our products are tested on animals, and we ensure that our supply chain adheres to cruelty-free practices.</p>
                    </li>
                    <li className="why-choose-us-item3">
                        <h4>Customer Satisfaction</h4>
                        <p>We prioritize our customers' satisfaction and offer a money-back guarantee if you're not completely happy with our products.</p>
                    </li>
                </ul>

                <h2 className="section-title5">Customer Testimonials</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p>"{testimonialsData[currentTestimonials].text}"</p>
                        <p>- {testimonialsData[currentTestimonials].author}</p>
                        <div className="rating">
                            {renderStars(testimonialsData[currentTestimonials].rating)}
                        </div>
                    </div>
                    </div>
                </div>
            </div></>
    );
};

export default About;
