import React from 'react';
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
  { name: 'MySql', imgSrc: '/src/assets/mysql.png' },
  { name: 'Php', imgSrc: '/src/assets/php.png' }
];

const Skills = () => {
  return (
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
  );
};

export default Skills;