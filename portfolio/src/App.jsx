import React, { useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css'; 



const App = () => {
  const [hover, setHover] = useState(false); 

  return (
      <div className="app">
          <Header />
          <header className="welcome-header">
          <div 
                    className="welcome-text" 
                   
                >
                    <h1>Martin Olsson</h1>
                    <h2>Frontend Developer</h2>
                </div>
          </header>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />

      </div>
  );
};

export default App;