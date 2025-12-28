import React from 'react';
import './Projects.css';

const Projects = () => {
  const buildingPlans = [
    {
      floor: "Basement Floor",
      // description: "Retail outlets and commercial spaces",
      // features: ["Prime retail location", "High foot traffic", "Modern storefronts"],
      image: "/fp1.jpg"
    },
    {
      floor: "Ground Floor",
      // description: "Commercial offices and business spaces",
      // features: ["Professional environment", "Modern facilities", "Parking access"],
      image: "/fp2.jpg"
    },
    {
      floor: "1st Floor",
      // description: "Additional office spaces and services",
      // features: ["Flexible layouts", "Natural lighting", "Meeting rooms"],
      image: "/fp3.jpg"
    },
    {
      floor: "2nd and 3rd Floor",
      // description: "Studio apartments and residential units",
      // features: ["Modern design", "Fully furnished", "City views"],
      image: "/fp4.jpg"
    },
    {
      floor: "4th and 5th Floor",
      // description: "Premium studio apartments",
      // features: ["Luxury finishes", "Balcony access", "Smart home features"],
      image: "/fp5.jpg"
    },
    {
      floor: "Mumty",
      // description: "Executive apartments and penthouses",
      // features: ["Spacious layouts", "Premium amenities", "Rooftop access"],
      image: "/fp6.jpg"
    }
  ];

  const features = [
    "Easily accessible from Motorway Ring Road, GT Road, Margalla Highway",
    "Affordable 2-Year Installment Plan",
    "Prime Location in Main Markaz",
    "500 ft Tube Well",
    "Underground Water supply",
    "Concealed Electricity",
    "Concealed Sewerage System",
    "Equipped with latest Security System",
    "Modern Elevators",
    "Roomy Corridors Lobbies",
    "Diligent Maintenance System",
    "Enthralling views from 80 ft High Rooftop",
    "Luxurious Apartments",
    "Spacious Shops & offices",
    "Underground & Overhead Water Tanks",
    "Rooftop Landscape with a Play Ground"
  ];

  const partners = [
    {
      name: "Mezzan Digital Marketing",
      contact: "03215644061",
      email: "sales@meezandigitalmarketing.com"
    },
    {
      name: "Banu Abdullah",
      contact: "0346-9668474",
      email: "info@banuabdullah.com"
    }
  ];

  return (
    <div className="projects-page">
      <header className="projects-header">
        <div className="projects-header-inner">
          <div>
            <h1>Burj Al Haram</h1>
            <p className="subtitle">A project of WISH 'N' DEAL ENGINEERING(PVT) LTD.</p>
          </div>
        </div>
      </header>

      {/* Separate preview image so building can be viewed */}
      <div className="project-preview">
        <img src="/burjulharam.png" alt="Burj Al Haram Preview" />
      </div>

      <section className="intro-section">
        <h2>An Ultra-Modern Development in FAISAL MARGALLA CITY (FMC)</h2>
        <p>
          By the grace of Allah, it is our immense pleasure to announce our new project "Burj Al Haram" Located at Faisal Margalla City (FMC), bordering Multi-Gardens B-17, Islamabad.
        </p>
        <p>
          Burj Al Haram is a project of Wish'N' Deal Engineering (Pvt) Ltd., managing by Banu Abdullah real Estate (Pvt) Ltd. and marketing by Meezan Digital Marketing. It is a 7-storey building comprising retail outlets, Modern Office Spaces, and Studio Apartments.
        </p>
      </section>

      <section className="building-plans-section">
        <h2>Building Plans</h2>
        <div className="building-plans-cards">
          {buildingPlans.map((plan, index) => (
            <div key={index} className="building-plan-card">
              <div className="plan-image-container">
                <img
                  src={plan.image}
                  alt={`${plan.floor} Plan`}
                  className="plan-image"
                />
              </div>
              <div className="plan-content">
                <h3>{plan.floor}</h3>
                {/* <p>{plan.description}</p>
                <div className="plan-features">
                  {plan.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-amenities-section">
        <h2>Features & AMENITIES</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <h3>{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="partners-section">
        <h2>PARTNERS With</h2>
        <div className="partners-container">
          {partners.map((partner, index) => (
            <div key={index} className="partner">
              <h3>{partner.name}</h3>
              <p>Contact: {partner.contact}</p>
              <p>Email: {partner.email}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
