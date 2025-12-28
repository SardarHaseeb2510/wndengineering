import React from 'react';
import './MoreUpcomingProjects.css';

const MoreUpcomingProjects = () => {
  const featuredProject = {
    title: "Arabian Tower Muree Road Rawalpindi",
    description: "A luxurious hotel featuring modern rooms, amenities, and exceptional hospitality services.",
    features: ["Hotel", "Modern Rooms", "Amenities"],
    image: "/arabian_tower.png"
  };

  const upcomingProjects = [
    { title: "Arabian Tower Muree Road Rawalpindi", desc: "A luxurious hotel featuring modern rooms, amenities, and exceptional hospitality services.", image: '/arabian_tower.png' },
    { title: 'Rise Building', desc: 'Commercial office complex and plaza', image: '/riseBuilding.jpeg' },
    { title: 'Filling Station', desc: 'Filling Station with premium amenities', image: '/FillingTower.jpeg' },
       ];

  return (
    <div className="more-upcoming-projects-page">
      <img className='main-img' src="/arabian_tower.png" alt="" />

      {/* Overlay: place header and featured project on top of the full-screen image */}
      <div className="main-overlay">
        <header className="more-upcoming-projects-header">
          <h1>Upcoming Projects</h1>
          <p className="subtitle">Discover our exciting future developments.</p>
        </header>

        {/* <section className="featured-project-section">
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
        </section> */}

        {/* Upcoming projects grid (image on left for each card) */}
        <section className="upcoming-grid container">
          {upcomingProjects.map((p, i) => (
            <article className="upcoming-card" key={i}>
              <div className="upcoming-image">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="upcoming-content">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="project-actions">
                  {/* <a className="btn btn-primary" href="#">Learn More</a> */}
                </div>
              </div>
            </article>
          ))}
        </section>

      </div>
    </div>
  );
};

export default MoreUpcomingProjects;
