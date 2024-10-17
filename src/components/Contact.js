import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" id="name" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" placeholder="Enter Your Mail ID" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" id="mobile" placeholder="Enter Your Mobile Number" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="subject" placeholder="Enter Subject of the Mail" />
                    </div>
                </div>

                <div className="form-group">
                    <textarea id="message" rows="6" placeholder="Enter your message here..."></textarea>
                </div>
                <div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </div>

            </form>
        </div>
    );
}

export default Contact;