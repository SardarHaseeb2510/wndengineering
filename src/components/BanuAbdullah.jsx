import React from 'react';
import './BanuAbdullah.css';

const BanuAbdullah = () => {
  return (
    <div className="banu-abdullah-page">
      <div className="project-hero">
        <div className="hero-content">
          <h1>Banu Abdullah Project</h1>
          <p>
            Our flagship project showcasing excellence in civil construction and engineering.
            This comprehensive development demonstrates our commitment to quality, innovation,
            and sustainable building practices in the Kingdom of Saudi Arabia.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="/BanuAbdullah_2.png"
            alt="Banu Abdullah Project"
            className="project-main-image"
          />
        </div>
      </div>
      <div className="project-highlights">
        <div className="highlight-card">
          <h3>🏗️ Civil Construction</h3>
          <p>Complete structural development with modern engineering standards</p>
        </div>
        <div className="highlight-card">
          <h3>🏢 Infrastructure</h3>
          <p>Advanced infrastructure solutions for modern urban development</p>
        </div>
        <div className="highlight-card">
          <h3>⚡ Quality Assurance</h3>
          <p>ISO certified processes ensuring highest quality standards</p>
        </div>
      </div>
    </div>
  );
};

export default BanuAbdullah;
