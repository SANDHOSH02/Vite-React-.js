import React, { useState, useEffect } from 'react';
import './portfoliosady.css'; 

const PortfolioSady = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <div id="intro" className="intro">
          <h1>WELCOME TO MY PORTFOLIO</h1>
        </div>
      ) : (
        <>
          <header>
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </header>

          <section id="about" className="section">
            <div className="about_del">
              <img className="img" src="/src/assets/san.jpeg" alt="Sandhosh's Profile Picture" />
              <div className="details">
                <h3>Sandhosh G</h3>
                <p>Student | B.Tech Artificial Intelligence and Data Science</p>
                <p>Studying at NSECT</p>
                <p>Fascinated by Full Stack Development</p>
                <blockquote>"I believe in Ikigai"</blockquote>
              </div>
            </div>
          </section>

          <section id="skills" className="section">
            <h1>Skills</h1>
            <p>This is the Skills section.</p>
          </section>

          <section id="projects" className="section">
            <h1>Projects</h1>
            <p>This is the Projects section.</p>
          </section>

          <section id="contact" className="section">
            <h1>Contact</h1>
            <p>This is the Contact section.</p>
          </section>

          <footer>
            <p>© 2024 Sandhosh G. All rights reserved.</p>
          </footer>
        </>
      )}
    </>
  );
}

export default PortfolioSady;
