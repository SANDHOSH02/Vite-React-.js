import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './portfoliosady.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const PortfolioSady = () => {
  const [showIntro, setShowIntro] = useState(true);
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
    <Router>
      {showIntro ? (
        <div id="intro" className="intro">
          <section1></section1>
          <h1 id="code-text">WELCOME TO MY PORTFOLIO.....</h1>
        </div>
      ) : (
        <>
          <header>
            <nav>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
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

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

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
    </Router>
  );
};

export default PortfolioSady;