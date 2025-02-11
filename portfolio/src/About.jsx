import React from 'react';
import './portfoliosady.css';

const About = () => {
  return (
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
  );
};

export default About;