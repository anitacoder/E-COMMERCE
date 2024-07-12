import React from "react";

const SignUp = () => {
  return (
    <div>
        <div className="signIn-content">
            <h1>Sign in</h1>
            <input type="name" placeholder="Name" className="sign-input" />
            <input type="surname" placeholder="surname" className="sign-input" />
            <input type="email" placeholder="Email" className="sign-input" />
            <input type="password" placeholder="Password" className="sign-input" />
            <button className="login-button">Login</button>
        </div>
    </div>
);
};

export default SignUp;
