import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>WishnDeal</h3>
            <p>
              Your ultimate destination for amazing deals and wish fulfillment. 
              Making dreams come true, one deal at a time.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#deals">Deals</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
         
          
          <div className="footer-section">
            <h4>Pakistan Contact Info</h4>
            <div className="contact-info">
              <p>📍 Park View Plaza, Shop and Flat # 1 and 2, G-10 Markaz, Islamabad </p>
              <p>📧 info@wndengineering.com</p>
              <p>📞 +92 3145300069</p>
              <p>🕒 Mon-Fri: 9AM-6PM</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>KSA Contact Info</h4>
            <div className="contact-info">
              <p>📍  </p>
              <p>📧 business@wndengineering.com</p>
              <p>📞 +92 3145300069</p>
              <p>🕒 Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>

        
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 WishnDeal. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 