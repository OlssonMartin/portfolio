import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> |
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                    <a href="mailto:your.email@example.com">Mail</a>
                </p>
                <p>© Martin Olsson 2024 - Frontend Developer - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;