import React from 'react';
import './Header.css'; 

const Header = () => {
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); 
        }
    };

    return (
        <header className="header">
            <div className="header-content">
                <h2 className="name">Martin Olsson</h2>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                    <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;