import React from 'react';
import './UpcomingProjects.css';

const UpcomingProjects = () => {
  const projects = [
    {
      title: "Modern Residential Complex",
      description: "A state-of-the-art residential development featuring sustainable design and modern amenities.",
      features: ["Green Building", "Smart Home Technology", "Community Facilities"],
      image: "/single-building.png"
    },
    {
      title: "Industrial Park Development",
      description: "Comprehensive industrial infrastructure with advanced logistics and manufacturing facilities.",
      features: ["Logistics Hub", "Manufacturing Units", "Warehousing Solutions"],
      image: "/riseBuilding.jpeg"
    },
    {
      title: "Commercial Center",
      description: "Mixed-use commercial development with retail, office spaces, and entertainment facilities.",
      features: ["Retail Spaces", "Office Buildings", "Entertainment Zone"],
      image: "/project-collage.png"
    },
    {
      title: "Infrastructure Project",
      description: "Large-scale infrastructure development including roads, utilities, and public amenities.",
      features: ["Road Networks", "Utility Systems", "Public Amenities"],
      image: "/Cranes.png"
    },
    {
      title: "Educational Campus",
      description: "Modern educational facility with advanced learning environments and research facilities.",
      features: ["Academic Buildings", "Research Centers", "Student Facilities"],
      image: "/Iso.webp"
    },
    {
      title: "Arabian Tower Muree Road Rawalpindi",
      description: "A luxurious hotel featuring modern rooms, amenities, and exceptional hospitality services.",
      features: ["Hotel", "Modern Rooms", "Amenities"],
      image: "/Arabian Tower Muree Road Rawalpindi.jpeg"
    }
  ];

  return (
    <div className="upcoming-projects-page">
      <header className="upcoming-projects-header">
        <h1>Upcoming Projects</h1>
        <p className="subtitle">Explore our upcoming developments and plans for the future.</p>
      </header>

      <section className="projects-summary">
        <h2>Future Developments</h2>
        <p>
          We are committed to delivering quality and excellence in every project.
          Our upcoming developments showcase innovative engineering solutions and
          sustainable building practices across various sectors.
        </p>
      </section>

      <section className="upcoming-projects-section">
        <h2>Project Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`${project.title} Image`}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-features">
                  {project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UpcomingProjects;
