import './Main.css';
import Training from './Training';
import Projects from './Projects';
import UpcomingProjects from './UpcomingProjects';
import BanuAbdullah from './BanuAbdullah';
import MoreUpcomingProjects from './MoreUpcomingProjects';
import { useEffect, useState } from 'react';

const Main = ({ currentPage, onNavigate }) => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Initialize all elements as visible immediately
    const animatedElements = document.querySelectorAll('[data-animate]');
    const initialVisibility = {};

    animatedElements.forEach(el => {
      initialVisibility[el.id] = true;
    });

    setIsVisible(initialVisibility);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    // Observe all animated elements for scroll-triggered animations
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, [currentPage]);

  const AnimatedElement = ({ children, id, animation = 'animate', delay = 0 }) => {
    const style = delay ? { animationDelay: `${delay}s` } : {};

    return (
      <div
        id={id}
        data-animate={animation}
        className={isVisible[id] ? animation : 'opacity-0'}
        style={style}
      >
        {children}
      </div>
    );
  };

  return (
    <main className="main">
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-container">
              <AnimatedElement id="hero-logo" animation="animate-scale">
                <img
                  src="/Logo.png"
                  alt="WishnDeal Logo"
                  className="hero-logo animate-float"
                />
              </AnimatedElement>

              <div className="hero-content">
                <AnimatedElement id="hero-title" delay={0.2}>
                  <h1 className="hero-title">Wish N Deal Engineering (Pvt) Ltd</h1>
                </AnimatedElement>

                <AnimatedElement id="hero-subtitle" delay={0.4}>
                  <p className="hero-subtitle">
                    Civil Construction & Industrial Solutions!
                    We have experienced manpower providing comprehensive civil services:
                    Asphalt Works, Civil Construction, Demolition, Repair & Renovation, and Cladding.
                  </p>
                </AnimatedElement>

                <AnimatedElement id="hero-buttons" delay={0.6}>
                  <div className="hero-buttons">
                    <button
                      className="btn btn-secondary"
                      onClick={() => onNavigate('about')}
                    >
                      Learn More
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => onNavigate('contact')}
                    >
                      Get In Touch
                    </button>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </section>

          {/* Company Overview Section */}
          <AnimatedElement id="company-overview">
            <div className="hero-container2">
              <h2 className="hero-title2">WISH "N" DEAL ENGINEERING (PVT) LTD.</h2>
              <p>
                A group with collaborative spirit that facilitates Engineers and disseminates
                construction services, fostering the world's Ethical, Social, Economic, and
                Intellectual growth using progressive and diverse techniques on the cutting edge
                of the construction industry. We also provide greater opportunities for Saudi youth
                to learn and develop skills and experience to contribute better in building our
                national growth of Saudi Arabia.
              </p>
            </div>
          </AnimatedElement>

          {/* Certifications & Experience Section */}
          <AnimatedElement id="certifications">
            <div className="hero-container3">
              <div className="hero-title3">
                We are ISO 9001:2015 & ISO 45001:2018 certified and locally registered with
                PEC & SECP. We have been providing quality services in the Kingdom of Saudi Arabia
                and Pakistan since 2006, specializing in Civil & Industrial Construction, Equipment
                Rental, and Technical Manpower supplies. High quality construction and civil works
                constitute an essential part of successful projects. Our competence in construction
                is demonstrated by the successful and timely completion of our projects. Backed by
                a team of skilled engineers and architects, we offer comprehensive services related
                to Civil and Structural Works. Our experts visit locations, design site maps, and
                execute projects according to our clients' requirements.
              </div>
              <img
                src="/Iso.webp"
                alt="ISO Certification"
                className="hero-img3"
              />
            </div>
          </AnimatedElement>

          {/* Services Section */}
          <AnimatedElement id="services-section">
            <section className="services">
              <div className="container">
                <h2 className="section-title">Our Comprehensive Services</h2>
                <div className="services-flex">
                  <p className="services-intro">
                    In addition to our core services, we undertake structural steel work for
                    heavy structures such as built-up columns and girders, utilized in:
                  </p>

                  {[
                    { title: "Storage Sheds", icon: "🏢" },
                    { title: "Warehouses", icon: "🏭" },
                    { title: "Cladding Solutions", icon: "🔧" },
                    { title: "Professional Painting", icon: "🎨" },
                    { title: "Repair & Renovation", icon: "🔨" },
                    { title: "Flood Light Towers", icon: "💡" },
                    { title: "Asphalt Works", description: "Yard and parking solutions", icon: "🛣️" },
                    { title: "Equipment Platform Structures", icon: "⚙️" },
                    { title: "Structural & Finishing Works", icon: "🏗️" },
                    { title: "Building Demolition", icon: "🏚️" },
                    { title: "Backfilling & Leveling with Survey", icon: "📐" }
                  ].map((service, index) => (
                    <AnimatedElement
                      key={service.title}
                      id={`service-${index}`}
                      animation="animate-scale"
                      delay={index * 0.1}
                    >
                      <div className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        {service.description && <p>{service.description}</p>}
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedElement>

          {/* Projects Showcase Section */}
          <AnimatedElement id="projects-showcase">
            <section className="custom-projects-section">
              <h2 className="custom-heading-main">
                WISH "N" DEAL ENGINEERING (PVT) LTD.
              </h2>
              <div className="custom-heading-underline"></div>
              <p className="custom-desc-main">
                Our team of highly skilled professionals has made it possible to improve the 
                quality of real estate experience for our prestigious clients through innovative 
                engineering solutions and exceptional project delivery.
              </p>

              <div className="custom-projects-flex">
                <AnimatedElement id="banu-project" animation="animate-left">
                  <div 
                    className="custom-projects-block" 
                    onClick={() => onNavigate('banu-abdullah')}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && onNavigate('banu-abdullah')}
                  >
                    <img
                      src="/project-collage.png"
                      alt="Banu Abdullah Project Showcase"
                      className="custom-image-main"
                    />
                    <div className="custom-caption-main">BANU ABDULLAH PROJECTS</div>
                  </div>
                </AnimatedElement>

                <AnimatedElement id="upcoming-project" animation="animate-right">
                  <div 
                    className="custom-projects-block" 
                    onClick={() => onNavigate('upcoming-projects')}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && onNavigate('upcoming-projects')}
                  >
                    <img
                      src="/single-building.png"
                      alt="Upcoming Projects Preview"
                      className="custom-image-main"
                    />
                    <div className="custom-caption-main">UPCOMING PROJECTS</div>
                  </div>
                </AnimatedElement>
              </div>
            </section>
          </AnimatedElement>

          {/* Enhanced Clients Section */}
          <AnimatedElement id="clients-section">
            <section className="clients-section">
              <div className="container">
                <h2 className="section-title">Our Trusted Partners & Clients</h2>
                <p className="clients-subtitle">
                  We are proud to work with industry leaders and prestigious organizations 
                  across Saudi Arabia and Pakistan.
                </p>
                <div className="clients-carousel">
                  <div className="clients-track">
                    {[
                      { src: "/alTaris.jpg", alt: "Al Taris", name: "Al Taris" },
                      { src: "/aramco.jpg", alt: "Saudi Aramco", name: "Saudi Aramco" },
                      { src: "/PM&C.jpg", alt: "PM&C", name: "PM&C" },
                      { src: "/sadara.jpg", alt: "Sadara Chemical", name: "Sadara Chemical" },
                      { src: "/sinopec.png", alt: "Sinopec", name: "Sinopec" },
                      { src: "/tamimi.jpg", alt: "Tamimi Group", name: "Tamimi Group" },
                      { src: "/Minhaj.jpg", alt: "Minhaj", name: "Minhaj" }
                    ].concat([
                      { src: "/alTaris.jpg", alt: "Al Taris", name: "Al Taris" },
                      { src: "/aramco.jpg", alt: "Saudi Aramco", name: "Saudi Aramco" },
                      { src: "/PM&C.jpg", alt: "PM&C", name: "PM&C" },
                      { src: "/sadara.jpg", alt: "Sadara Chemical", name: "Sadara Chemical" },
                      { src: "/sinopec.png", alt: "Sinopec", name: "Sinopec" },
                      { src: "/tamimi.jpg", alt: "Tamimi Group", name: "Tamimi Group" },
                      { src: "/Minhaj.jpg", alt: "Minhaj", name: "Minhaj" }
                    ]).map((client, index) => (
                      <div key={`client-${index}`} className="client-logo">
                        <img 
                          src={client.src} 
                          alt={client.alt}
                          title={client.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </AnimatedElement>
        </>
      )}

      {currentPage === 'about' && (
        <AnimatedElement id="about-page">
          <section className="about">
            <div className="container">
              <div className="about-content">
                <div className="about-text">
                  
                  <h3>WHO WE ARE</h3>
                  <p>
                    We have organized management teams with clear delineation of individual 
                    responsibility and authority. Our workforce comprises HSE, Telecom, Civil, 
                    Mechanical, Chemical & Electrical engineers, Technicians, skilled workers, 
                    riggers, crane & other heavy machine operators who have extensive experience 
                    in project planning and implementation in their respective fields. They are 
                    also well conversant with ISO 9001 health & safety procedures for industries. 
                    As a result, we competently deliver the highest quality of services to our 
                    clients, meeting their satisfaction levels at the best standards.
                  </p>
                  
                  <h3>OUR VISION</h3>
                  <p>
                    To set the standard and pace in variety of services across all arenas, through 
                    hard work, ethical business practices, and philanthropic endeavors. We aim to 
                    provide quality services that consistently exceed the expectations of our 
                    esteemed customers while contributing to sustainable development.
                  </p>
                  
                  <h3>OUR MISSION</h3>
                  <p>
                    Our group, with collaborative spirit, facilitates Engineers and disseminates 
                    construction and other services fostering the world's Ethical, Social, 
                    Economic, and Intellectual growth. We use progressive and diverse techniques 
                    on the cutting edge of the construction industry. Additionally, we provide 
                    greater opportunities for Saudi youth to learn and develop skills and 
                    experience to contribute better in building our nation's growth in Saudi Arabia.
                  </p>

                  <h3>OUR VALUES</h3>
                  <ul className="values-list">
                    <li><strong>Quality Excellence:</strong> Delivering superior results in every project</li>
                    <li><strong>Safety First:</strong> Maintaining the highest safety standards</li>
                    <li><strong>Innovation:</strong> Embracing cutting-edge technologies and methods</li>
                    <li><strong>Sustainability:</strong> Promoting environmentally responsible practices</li>
                    <li><strong>Integrity:</strong> Conducting business with transparency and honesty</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedElement>
      )}

      {currentPage === 'services' && (
        <AnimatedElement id="services-page">
          <section className="services">
            <div className="container">
              <h2 className="section-title">Our Professional Services</h2>
              <div className="services-description">
                <p>
                  With over 17 years of experience in the construction industry, we provide 
                  comprehensive solutions for all your civil and industrial construction needs. 
                  Our services are backed by ISO certifications and delivered by highly skilled professionals.
                </p>
              </div>
              <div className="services-flex">
                <p className="services-intro">
                  In addition to our core services, we undertake structural steel work for 
                  heavy structures such as built-up columns and girders, utilized in:
                </p>
                
                {[
                  { 
                    title: "Storage Sheds", 
                    description: "Custom-designed storage solutions for industrial and commercial use",
                    icon: "🏢" 
                  },
                  { 
                    title: "Warehouses", 
                    description: "Large-scale warehouse construction with modern facilities",
                    icon: "🏭" 
                  },
                  { 
                    title: "Cladding Solutions", 
                    description: "Professional cladding services for building exteriors",
                    icon: "🔧" 
                  },
                  { 
                    title: "Professional Painting", 
                    description: "Industrial and commercial painting services",
                    icon: "🎨" 
                  },
                  { 
                    title: "Repair & Renovation", 
                    description: "Complete renovation and repair services for existing structures",
                    icon: "🔨" 
                  },
                  { 
                    title: "Flood Light Towers", 
                    description: "Installation of high-quality lighting systems",
                    icon: "💡" 
                  },
                  { 
                    title: "Asphalt Works", 
                    description: "Yard and parking area construction and maintenance",
                    icon: "🛣️" 
                  },
                  { 
                    title: "Equipment Platform Structures", 
                    description: "Specialized platforms for heavy industrial equipment",
                    icon: "⚙️" 
                  },
                  { 
                    title: "Structural & Finishing Works", 
                    description: "Complete structural solutions with premium finishing",
                    icon: "🏗️" 
                  },
                  { 
                    title: "Building Demolition", 
                    description: "Safe and efficient demolition services",
                    icon: "🏚️" 
                  },
                  { 
                    title: "Backfilling & Leveling with Survey", 
                    description: "Professional site preparation with accurate surveying",
                    icon: "📐" 
                  }
                ].map((service, index) => (
                  <div key={service.title} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedElement>
      )}

      {currentPage === 'contact' && (
        <AnimatedElement id="contact-page">
          <section className="contact">
            <div className="container">
              <h2 className="section-title">Get In Touch With Us</h2>
              <div className="contact-content">
                <p>
                  Ready to start your next project? Contact us today for professional 
                  consultation and competitive quotes. Our team is ready to bring your 
                  vision to life with quality and precision.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <h3>Email Address</h3>
                    <p>info@wishndeal.com</p>
                    <p>projects@wishndeal.com</p>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <h3>Phone Numbers</h3>
                    <p>+966 (13) 123-4567</p>
                    <p>+92 (42) 987-6543</p>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <h3>Office Locations</h3>
                    <p><strong>Saudi Arabia:</strong><br />Dammam, Eastern Province</p>
                    <p><strong>Pakistan:</strong><br />Lahore, Punjab</p>
                  </div>
                </div>
                <div className="contact-cta">
                  <button className="btn btn-primary">Request a Quote</button>
                  <button className="btn btn-secondary">Schedule Consultation</button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedElement>
      )}

      {currentPage === 'training' && <Training />}
      {currentPage === 'projects' && <Projects />}
      {currentPage === 'banu-abdullah' && <BanuAbdullah />}
      {currentPage === 'more-upcoming-projects' && <MoreUpcomingProjects />}
    </main>
  );
};

export default Main;