import React from 'react';
import './DrillingServices.css';
import './Projects.css';

const DrillingServices = () => {
  return (
    <section className="services drilling-services">
      <div className="container">
        <h2 className="section-title">Drilling Services</h2>
        <p className="services-description">
          Our experienced drilling team performs complete drilling operations including site survey, borehole drilling, and water well development. We follow strict safety and quality standards and use modern drilling rigs and equipment.
        </p>

        <div className="drilling-intro">
          <p>
            Our team works across all phases of the drilling process — from surveying and mobilization to drilling, cleaning, and testing — ensuring reliable water extraction and ground investigation services.
          </p>
        </div>

        <div className="drilling-grid">
          <div className="drilling-item">
            <video controls className="drilling-video">
              <source src="/Drilling_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Water cleaning process with Compressor</h3>
            <p>Video of water cleaning process using compressor to flush and clean the borehole.</p>
          </div>

          <div className="drilling-item">
            <video controls className="drilling-video">
              <source src="/Drilling_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Drilling in Progress of Tube Well</h3>
            <p>Live drilling operation showing progress of tube well drilling.</p>
          </div>

          <div className="drilling-item">
            <video controls className="drilling-video">
              <source src="/Drilling_3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Survey of bore for water level</h3>
            <p>Survey and measurement of bore to determine water levels and suitability.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrillingServices;
