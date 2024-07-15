import React from "react";
import "./contact.css";

const contact = () => {
    return (
        <div>
            <div className="contact-content">
                <h1 className="contact">Contact Us</h1>
                <input type="email" placeholder="Email" className="contact-input" />
                <label className="email">Email: </label>
                <input type="password" placeholder="Password" className="contact-input1" />
                <label className="password">Password: </label>
                <label htmlFor="message" className="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    <button type="submit" className="submit">Send Message</button>
            </div>
        </div>
    );
}

export default contact;
