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
                <li><a href="#Resume">Resume</a></li>
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

          <section id="Resume" className="section">
            <h1>Resume</h1>
            
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