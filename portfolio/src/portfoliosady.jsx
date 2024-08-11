import React, { useState, useEffect } from 'react';
import './portfoliosady.css'; 

const skillsData = [
  { name: 'HTML', imgSrc: '/src/assets/html.png' },
  { name: 'CSS', imgSrc: '/src/assets/css.png' },
  { name: 'JavaScript', imgSrc: '/src/assets/javascript.png' },
  { name: 'React.js', imgSrc: '/src/assets/react.png' },
  { name: 'Python', imgSrc: '/src/assets/python.png' },
  { name: 'Machine Learning', imgSrc: '/src/assets/ml.png' },
  { name: 'GitHub', imgSrc: '/src/assets/github.png' },
  { name: 'LeetCode', imgSrc: '/src/assets/leetcode.png' },
  {name: 'MySql', imgSrc:'/src/assets/Mysql.png'},
  {name: 'Php', imgSrc:'/src/assets/Php.png'}
];

const PortfolioSady = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showCard, setShowCard] = useState(false);

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
                <li><a href="#resume">Resume</a></li>
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
            <p>As a technical enthusiast, I am skilled in a variety of technologies:</p>
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
                  <h2>Chatbot</h2>
                  <p>This is a chatbot application developed using the OpenAI API. The chatbot utilizes advanced AI to engage in meaningful conversations. It is built primarily with Python and includes voice support, offering both male and female voice options for an enhanced user experience.</p>
                  <button onClick={() => setShowCard(!showCard)}>
                    How to Make
                  </button>
                  {showCard && (
                    <>
                      <div className='info-card-overlay' onClick={() => setShowCard(false)}></div>
                      <div className='info-card'>
                        <h3>How to Make the Chatbot</h3>
                        <p>To create this chatbot, we used the OpenAI API to provide natural language understanding and generation. The chatbot was implemented in Python and includes additional voice functionality to enhance user interaction. The male and female voice options were added to cater to different user preferences.</p>
                        <p>For more details on the OpenAI API, check out the official documentation: <a href="https://platform.openai.com/docs/api-reference/introduction" target="_blank" rel="noopener noreferrer">OpenAI API Reference</a></p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* Future projects can be added here */}
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
    <a href="https://github.com/SANDHOSH02" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.05-1.61-4.05-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.54.12-3.22 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.4 1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.91.12 3.22.77.84 1.24 1.92 1.24 3.24 0 4.66-2.8 5.67-5.48 5.97.43.37.81 1.1.81 2.22 0 1.61-.02 2.91-.02 3.3 0 .32.21.7.82.58C20.56 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
    <a href="https://linkedin.com/in/santhosh-gowravan" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5c0 1.38-1.11 2.5-2.49 2.5S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.22 24V7.98H4.8V24H.22zM8.54 7.98H13v2.16h.06c.62-1.17 2.13-2.4 4.38-2.4 4.68 0 5.55 3.08 5.55 7.08V24h-4.59v-6.96c0-1.66-.03-3.78-2.31-3.78-2.31 0-2.67 1.81-2.67 3.66V24H8.54V7.98z" />
      </svg>
    </a>
    <a href="https://leetcode.com/u/santhoshgowravan/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M146.1 301c0-25.6 0-51.3 4.5-76.9 10.2-56.6 38.5-104.5 81.7-143.8 51.3-45.6 109-76.9 173.7-94.9 15.4-5.1 30.8-7.7 48.7-10.2 7.7-2.6 15.4 0 23.1 2.6 0 2.6 2.6 5.1 2.6 7.7v7.7c-33.3 17.9-64.1 38.5-94.9 61.5-10.2 7.7-15.4 17.9-20.5 30.8 0 2.6-2.6 2.6-5.1 5.1 2.6 5.1 5.1 7.7 10.2 7.7 20.5 2.6 41 7.7 61.5 12.8 12.8 5.1 25.6 12.8 35.9 20.5 20.5 12.8 41 28.2 58.9 45.6 28.2 28.2 56.6 56.6 86.9 81.7 12.8 10.2 25.6 20.5 38.5 30.8 0 2.6 5.1 2.6 5.1 5.1 2.6 2.6 2.6 5.1 2.6 7.7-2.6 2.6-5.1 7.7-7.7 10.2-7.7 5.1-15.4 7.7-23.1 12.8-30.8 20.5-64.1 35.9-102.6 41-46.1 7.7-89.7 0-130.8-20.5-25.6-12.8-51.3-30.8-71.8-53.8-2.6-2.6-5.1-5.1-10.2-5.1s-5.1 0-7.7 2.6c-30.8 35.9-58.9 73.1-79.5 115.3-5.1 10.2-12.8 17.9-17.9 28.2-2.6 7.7 0 15.4 2.6 23.1 2.6 5.1 10.2 7.7 15.4 10.2 30.8 12.8 64.1 17.9 97.4 15.4 33.3-2.6 64.1-12.8 94.9-28.2 43.6-23.1 84.7-51.3 125.8-79.5 43.6-30.8 84.7-61.5 122.9-99.7 41-38.5 81.7-79.5 115.3-125.8 30.8-41 58.9-84.7 81.7-130.8 25.6-53.8 41-110.3 43.6-168 5.1-51.3-2.6-102.6-20.5-153.8-17.9-46.1-46.1-87.2-81.7-122.9-46.1-46.1-99.7-79.5-161.5-99.7-48.7-15.4-99.7-23.1-151-20.5-69.2 2.6-133.9 20.5-192.3 61.5-58.9 41-102.6 94.9-133.9 161.5-33.3 74.4-46.1 153.8-33.3 235.4 2.6 12.8 5.1 28.2 7.7 43.6 0 5.1 0 7.7 5.1 12.8z" />
        <path d="M705.8 779.5c-5.1-2.6-7.7 0-10.2 2.6-23.1 12.8-46.1 25.6-69.2 35.9-38.5 17.9-76.9 33.3-115.3 51.3-2.6 0-5.1 0-7.7 2.6-7.7 7.7-5.1 15.4 2.6 20.5 7.7 5.1 15.4 7.7 23.1 7.7 56.6 2.6 110.3-10.2 161.5-38.5 38.5-20.5 76.9-43.6 110.3-73.1 20.5-17.9 38.5-38.5 56.6-58.9 10.2-12.8 12.8-25.6 10.2-41-15.4-2.6-25.6 7.7-35.9 15.4-37.5 31.5-79.5 58.9-124.2 84.7z" />
      </svg>
    </a>
  </div>
  <p>© 2024 Sandhosh G. All rights reserved.</p>
</footer>

        </>
      )}
    </>
  );
}

export default PortfolioSady;