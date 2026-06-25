import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'CSS', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
              <div className="skill-percent">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;