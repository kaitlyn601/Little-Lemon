import React from 'react';
import logo from './assets/Logo .svg';
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <img src={logo} alt='Logo' />
          <p>
            Little Lemon
            <br />
            Chicago, IL
          </p>
        </div>
        <div className='footer-column'>
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/menu'>Menu</a>
            </li>
            <li>
              <a href='/booking'>Reservations</a>
            </li>
          </ul>
        </div>
        <div className='footer-column'>
          <h4>Contact</h4>
          <ul>
            <li>123 Main St.</li>
            <li>Chicago, IL</li>
            <li>(123) 456-7890</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>
        <div className='footer-column'>
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href='#'>Instagram</a>
            </li>
            <li>
              <a href='#'>Facebook</a>
            </li>
            <li>
              <a href='#'>Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
