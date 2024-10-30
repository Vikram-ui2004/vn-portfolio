import React, { useState } from 'react';
import './Projectsection.css';

const Projectsection = () => {
  const [showMore, setShowMore] = useState(false);

  // Project data
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS.',
      image: 'portfolio.jpg',
      liveLink: 'https://yourportfolio.com',
      githubLink: 'https://github.com/yourprofile/portfolio'
    },
    {
      title: 'E-Commerce App',
      description: 'An online shopping platform using Next.js and Stripe API.',
      image: 'ecommerce.jpg',
      liveLink: 'https://ecommerceapp.com',
      githubLink: 'https://github.com/yourprofile/ecommerce'
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app built with React and OpenWeather API.',
      image: 'weather.jpg',
      liveLink: 'https://weatherapp.com',
      githubLink: 'https://github.com/yourprofile/weather-app'
    },
    {
      title: 'Task Manager',
      description: 'A task management app using Python and Django.',
      image: 'taskmanager.jpg',
      liveLink: 'https://taskmanager.com',
      githubLink: 'https://github.com/yourprofile/taskmanager'
    },
    {
      title: 'Blog Platform',
      description: 'A blogging platform built with Next.js and Tailwind CSS.',
      image: 'blog.jpg',
      liveLink: 'https://blogplatform.com',
      githubLink: 'https://github.com/yourprofile/blog-platform'
    }
  ];

  // Toggle show more projects
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className="project-section">
      <h2 className="section-title" id='pro'>Projects</h2>
      
      <div className="project-grid">
        {/* Show only 3 main projects initially */}
        {projects.slice(0, 4).map((project, index) => (
          <div className="project-box" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-live">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
              </div>
            </div>
          </div>
        ))}

        {/* Show additional projects on "Read More" */}
        {showMore && projects.slice(4).map((project, index) => (
          <div className="project-box" key={index + 3}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-live">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Read More / Show Less Button */}
      <div className="read-more">
        <button onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default Projectsection;
