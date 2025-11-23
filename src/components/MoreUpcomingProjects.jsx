import React from 'react';
import './MoreUpcomingProjects.css';

const MoreUpcomingProjects = () => {
  const featuredProject = {
    title: "Arabian Tower Muree Road Rawalpindi",
    description: "A luxurious hotel featuring modern rooms, amenities, and exceptional hospitality services.",
    features: ["Hotel", "Modern Rooms", "Amenities"],
    image: "/Arabian Tower Muree Road Rawalpindi.jpeg"
  };

  return (
    <div className="more-upcoming-projects-page">
      <header className="more-upcoming-projects-header">
        <h1>Upcoming Projects</h1>
        <p className="subtitle">Discover our exciting future developments.</p>
      </header>

      <section className="featured-project-section">
        <h2>Featured Project</h2>
        <div className="featured-project-card">
          <div className="featured-project-image-container">
            <img
              src={featuredProject.image}
              alt={`${featuredProject.title} Image`}
              className="featured-project-image"
            />
          </div>
          <div className="featured-project-content">
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <div className="featured-project-features">
              {featuredProject.features.map((feature, index) => (
                <span key={index} className="feature-tag">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreUpcomingProjects;
