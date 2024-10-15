import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <section id="contact" className="section">
            <h3>Contact Me</h3>
            <div className="contact-links">
                <p>Email: <a href="mailto:Martin1862@hotmail.com">Martin1862@hotmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                <p>GitHub: <a href="https://github.com/OlssonMartin" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
            </div>
        </section>
    );
};

export default Contact;