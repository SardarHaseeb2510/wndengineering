import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = ({ currentPage, onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = (page) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="top-left">
            <div className="logo">
              <h1>Wish'N'Deal</h1>
            </div>
          </div>
          <div className="top-center">
            <div className="top-contact">+966 (13) 361 9165 &nbsp; &nbsp; business@wndengineering.com</div>
            <div className="top-contact">+92 3145300069 &nbsp; &nbsp; info@wndengineering.com</div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="header-main">
        <div className="header-container">
          <div className="logo">
            {/* <h1>Wish'N'Deal</h1> */}
          </div>
          <button className="hamburger" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li>
                <button
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => handleClick('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleClick('about')}
                >
                  About
                </button>
              </li>
              <li ref={dropdownRef} className="dropdown">
                <button
                  className={`nav-link ${currentPage === 'projects' || currentPage === 'banu-abdullah' || currentPage === 'upcoming-projects' ? 'active' : ''}`}
                  onClick={toggleDropdown}
                >
                  Projects
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className={`dropdown-item ${currentPage === 'banu-abdullah' ? 'active' : ''}`}
                        onClick={() => handleClick('banu-abdullah')}
                      >
                        Banu Abdullah
                      </button>
                    </li>
                    <li>
                      <button
                        className={`dropdown-item ${currentPage === 'upcoming-projects' || currentPage === 'projects' ? 'active' : ''}`}
                        onClick={() => handleClick('projects')}
                      >
                        Burj Al Haram
                      </button>
                    </li>
                    <li>
                      <button
                        className={`dropdown-item ${currentPage === 'more-upcoming-projects' ? 'active' : ''}`}
                        onClick={() => handleClick('more-upcoming-projects')}
                      >
                        Upcoming projects
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className={`nav-link ${currentPage === 'training' ? 'active' : ''}`}
                  onClick={() => handleClick('training')}
                >
                  HSE Skills
                </button>
              </li>
              <li>
                <button
                  className={`nav-link ${currentPage === 'drilling' ? 'active' : ''}`}
                  onClick={() => handleClick('drilling')}
                >
                  Drilling Services
                </button>
              </li>
            </ul>
          </nav>

          {/* <div className="cta-quote">
            <button className="btn btn-primary" onClick={() => handleClick('contact')}>Get A Quote</button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
