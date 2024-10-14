import React from 'react';
import './About.css'; // Länka till din CSS-fil för About

const About = () => {
    return (
        <section id="about" className="section about-section">
            <h3>About Me</h3>
            <p>
                Jag är en kreativ frontendutvecklare med en passion för design och en öga för detaljer. 
                Med erfarenhet av HTML, CSS och JavaScript arbetar jag med moderna ramverk som React och TypeScript 
                för att skapa användarvänliga och responsiva webbplatser.
            </p>
            <p>
                Jag har nyligen avslutat mina studier inom frontendutveckling och letar efter möjligheter att 
                använda mina färdigheter i verkliga projekt. 
                Jag tror på att ständigt växa och lära mig, och jag är alltid redo för nya utmaningar.
            </p>
        </section>
    );
};

export default About;