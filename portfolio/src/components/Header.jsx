import React from 'react';
import './Header.css'; // Länka till din CSS-fil för headern

const Header = () => {
    // Funktion för att scrolla till sektionerna
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll-effekt
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