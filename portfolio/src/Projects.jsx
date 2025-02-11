import React, { useState } from 'react';
import './portfoliosady.css';

const Projects = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <section id="projects" className="section">
      <h1>Projects</h1>
      <div className='projects-container'>
        <div className='chatbot'>
          <img className='project-img' src='/src/assets/chatbot.png' alt='Chatbot' />
          <div className='project-description'>
            <h2>Chatbot</h2>
            <p>This is a chatbot application developed using the OpenAI API...</p>
            <button onClick={() => setShowCard(!showCard)}>
              How to Make
            </button>
            {showCard && (
              <>
                <div className='info-card-overlay' onClick={() => setShowCard(false)}></div>
                <div className='info-card'>
                  <h3>How to Make the Chatbot</h3>
                  <p>To create this chatbot, we used the OpenAI API key to access data, and we coded it in Python. When a user asks a question, the chatbot provides an answer for any query. Our innovation is that while the current model can only respond with text, we implemented a feature where the answer is given both in text and voice, making it easier for the user to understand.</p>
                  <a target='/' href='https://community.openai.com/t/how-to-generate-openai-api-key/401363'>OPEN AI API SITE LINK</a>
                </div>
              </>
            )}
          </div>
        </div>
        <div className='chatbot'>
          <img className='project-img' src='/src/assets/download.jpeg' alt='learning' />
          <div className='project-description'>
            <h2>Personalized-Learning-Platform</h2>
            <p>The Personalized Learning Platform is an AI-driven educational tool designed to tailor learning experiences for individual users.</p>
            <button onClick={() => setShowCard(!showCard)}>
              How to Make
            </button>
            {showCard && (
              <>
                <div className='info-card-overlay' onClick={() => setShowCard(false)}></div>
                <div className='info-card'>
                  <h3>How to Make the Personalized-Learning-Platform</h3>
                  <p></p>
                  <a target='/' href='https://community.openai.com/t/how-to-generate-openai-api-key/401363'>OPEN AI API SITE LINK</a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;