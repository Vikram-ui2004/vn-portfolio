import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Progress.css';

const Progress = () => {
  const skills = [
    { title: 'Web Development', percentage: 50, color: '#3b82f6' },
    { title: 'Logo Design', percentage: 20, color: '#10b981' },
    { title: 'UI Design', percentage: 25, color: '#f59e0b' }
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title" id='exp'>Working Experience</h2>
      <div className="experience-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="progress-circle">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: '#333',
                  pathColor: skill.color,
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <h3 className="skill-title">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
