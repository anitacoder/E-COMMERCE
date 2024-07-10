import React from "react";
import Contact from "./Components/contact";
import Home from "./Components/Home";
import LoginForm from "./Components/loginForm";
import Privacy from "./Components/privacy";
import SignUp from "./Components/signUp";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
const App = () =>  {
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/privacy" element={<Privacy/>}/>  
        <Route path="/LoginForm" element={<LoginForm/>}/>  
        <Route path="/Contact" element={<SignUp/>}/>  
        <Route path="/SignUp" element={<Contact/>}/>    
      </Routes>
    </Router>
  </div>
};

export default App;
