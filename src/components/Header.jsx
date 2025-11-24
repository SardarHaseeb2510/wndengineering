import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = ({ currentPage, onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = (page) => {
    setDropdownOpen(false);
    onNavigate(page);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
      <div className="header-container">
        <div className="logo">
          <h1>Wish'N'Deal</h1>
        </div>
        <nav className="nav">
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
                Training
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
