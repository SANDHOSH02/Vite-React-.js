import React from 'react';
import './portfoliosady.css'; 

const PortfolioSady = () => {
  return (
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

      {/* About Section */}
      <section id="about" className="section">
        <h1>About</h1>
        <p>This is the About section.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h1>Skills</h1>
        <p>This is the Skills section.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h1>Projects</h1>
        <p>This is the Projects section.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h1>Contact</h1>
        <p>This is the Contact section.</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
      
      </>
  );
}

export default PortfolioSady;
