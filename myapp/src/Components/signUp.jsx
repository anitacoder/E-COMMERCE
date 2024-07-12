import React, { useState } from "react";
import "./signUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="signIn-content">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Name" className="sign-input" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Surname" className="sign-input" value={surname} onChange={(e) => setSurname(e.target.value)}/>
        <input type="email" placeholder="Email" className="sign-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" className="sign-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="sign-button" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
