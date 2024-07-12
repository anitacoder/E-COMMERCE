import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./LoginForm.css";

const LoginForm = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoom = () => {
        setIsZoomed(true);
        setTimeout(() => setIsZoomed(false), 600); 
    };

    return (
        <div className={`container ${isZoomed ? 'zoom' : ''}`} onClick={handleZoom}>
            <div className="login-content">
                <h1>Login</h1>
                <input type="email" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <button className="login-button">Login</button>
                <div className="signIn">
                <p>Or <Link to="/signUp" className="sign">Sign Up</Link></p> 
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
