  import React, { useState, useEffect } from 'react';
  import './portfoliosady.css';

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const skillsData = [
    { name: 'HTML', imgSrc: '/src/assets/html.png' },
    { name: 'CSS', imgSrc: '/src/assets/css.png' },
    { name: 'JavaScript', imgSrc: '/src/assets/javascript.png' },
    { name: 'React.js', imgSrc: '/src/assets/react.png' },
    { name: 'Python', imgSrc: '/src/assets/python.png' },
    { name: 'Machine Learning', imgSrc: '/src/assets/ml.png' },
    { name: 'GitHub', imgSrc: '/src/assets/github.png' },
    { name: 'LeetCode', imgSrc: '/src/assets/leetcode.png' },
    { name: 'MySql', imgSrc: '/src/assets/mysql.png' },
    { name: 'Php', imgSrc: '/src/assets/php.png' }
  ];

  const PortfolioSady = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [codeAnimationCompleted, setCodeAnimationCompleted] = useState(false);

    useEffect(() => {
      if (codeAnimationCompleted) {
        const timer = setTimeout(() => setShowIntro(false), 2000); 
        return () => clearTimeout(timer);
      }
    }, [codeAnimationCompleted]);

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
      const element = document.getElementById("code-text");
      if (element) {
        const originalText = element.innerText;
        let index = 0;
        let interval = null;

        const codeCrackEffect = () => {
          const randomText = originalText
            .split("")
            .map((char, i) => {
              if (i < index) {
                return originalText[i];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          element.innerText = randomText;

          if (index >= originalText.length) {
            clearInterval(interval);
            setCodeAnimationCompleted(true); 
          }

          index += 1 / 3; 
        };

        interval = setInterval(codeCrackEffect, 30);
        return () => clearInterval(interval);
      }
    }, []);

    return (
      <>
        {showIntro ? (
          <div id="intro" className="intro">
            <h1 id="code-text">WELCOME TO MY PORTFOLIO.....</h1> 
          </div>
        ) : (
          <>
            <header>
              <nav>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#resume">Resume</a></li>
                  <li>
                    <button
                      className="toggle-button"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                      {isDarkMode ? '🌙' : '☀️'}
                    </button>
                  </li>
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
              
              <div className="skills-container">
                {skillsData.map(skill => (
                  <div key={skill.name} className="skill-card">
                    <img className="skill-img" src={skill.imgSrc} alt={skill.name} />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="section">
              <h1>Projects</h1>
              <div className='projects-container'>
                <div className='chatbot'>
                  <img className='project-img' src='/src/assets/chatbot.png' alt='Chatbot' />
                  <div className='project-description'>
                    <h2>Chatbot  </h2>
                    <p>This is a chatbot application developed using the OpenAI API...</p>
                    <button onClick={() => setShowCard(!showCard)}>
                      How to Make
                    </button>
                    {showCard && (
                      <>
                        <div className='info-card-overlay' onClick={() => setShowCard(false)}></div>
                        <div className='info-card'>
                          <h3>How to Make the Chatbot</h3>
                          <p>To create this chatbot, we used the OpenAI API...</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
              </div>
            </section>


            

            <section id="resume" className="section resume-section">
              <h1>Resume</h1>
              <div className="resume-container">
                <img className="resume-img" src="/src/assets/resume.jpg" alt="Resume" />
              </div>
            </section>

            <footer>
              <div className="footer-icons">
                <a href="https://github.com/SANDHOSH02" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/sandhosh-g-884b7b279" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://leetcode.com/u/santhoshgowravan/" target="_blank" rel="noopener noreferrer">LeetCode</a>
              </div>
              <p>© 2024 Sandhosh G. All rights reserved.</p>
            </footer>
          </>
        )}
      </>
    );
  }

  export default PortfolioSady;
