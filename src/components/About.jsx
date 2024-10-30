import React,{useState} from 'react';
import './About.css';
import VikramCV from '../images/VikramCV.pdf';

const skillsData = [
  { name: 'Java', description: 'Proficient in Java for building object-oriented applications and solving complex algorithms.' },
  { name: 'C/C++', description: 'Solid understanding of C/C++ for system-level programming and competitive coding.' },
  { name: 'HTML', description: 'Experienced in crafting semantic and accessible HTML for building web structures.' },
  { name: 'CSS', description: 'Skilled in modern CSS, including Flexbox and Grid, for designing responsive layouts.' },
  { name: 'JavaScript', description: 'Expert in JavaScript for building interactive and dynamic web applications.' },
  { name: 'React JS', description: 'Proficient in React for developing scalable and reusable UI components.' },
  { name: 'Next JS', description: 'Experienced in Next.js for server-side rendering and static site generation.' },
  { name: 'Python', description: 'Comfortable with Python for scripting, automation, and data analysis.' },
  { name: 'GitHub', description: 'Knowledgeable in using GitHub for version control and collaborative development.' },
  { name: 'Vercel', description: 'Familiar with Vercel for deploying and managing frontend web applications.' },
  { name: 'VS Code', description: 'Efficient in using VS Code as the main development environment for coding.' },
  { name: 'Tailwind CSS', description: 'Proficient in Tailwind CSS for rapidly styling websites with utility-first classes.' }
];

const hobbiesData = [
  { name: 'Reading Books', description: 'I enjoy reading books on technology, self-improvement, and fictional stories to keep my mind sharp.' },
  { name: 'Creative Mind', description: 'I love brainstorming and coming up with creative solutions for challenging problems.' },
  { name: 'Fast Learner', description: 'I have a natural ability to quickly grasp new concepts and apply them effectively in real-world projects.' }
];

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (

    <div className="about-container">
      <h1 className="about-title" id='abt'>About Me</h1>

      <p className="about-description">
        Hi! I'm a 2nd year student of BCA and passionate Frontend Developer with a love for building user-friendly and efficient applications. I am always eager to learn new technologies and improve my skills. Here are some of the technologies I work with and my hobbies.
        <br/><br /><a className='cv' href={VikramCV} download>Download CV</a>
      </p>

      <div className="skills-container">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-list">
            {skillsData.slice(0, showMore ? skillsData.length : 5).map((skill, index) => (
              <div key={index} className="skill-item">
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
   
      <button className="read-more-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>

        <div className="hobbies-container">
          <h3 className="hobbies-title">Hobbies & Interests</h3>
          <div className="hobbies-list">
            {hobbiesData.map((hobby, index) => (
              <div key={index} className="hobby-item">
                <h4>{hobby.name}</h4>
                <p>{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  
  );
};



export default About;
