import kasaLogoWhite from '../assets/kasa-logo-white.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={kasaLogoWhite} alt="Kasa" className="footer-logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

