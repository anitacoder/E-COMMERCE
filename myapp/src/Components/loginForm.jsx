import React from "react";
import "./LoginForm.css"; 

const LoginForm = () => {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="login-content">
                <input type="email" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <button className="login-button">Login</button>
            </div>  
        </div>
    )
}

export default LoginForm;
