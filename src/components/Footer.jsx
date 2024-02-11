import React from 'react';


function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-column'>
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet ante at odio rhoncus dapibus.</p>
        </div>
        <div className='footer-column'>
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className='footer-column'>
          <h4>Follow Us</h4>
          <div className='social-icons'>
            <a href='#'><i className='fab fa-facebook'></i></a>
            <a href='#'><i className='fab fa-twitter'></i></a>
            <a href='#'><i className='fab fa-instagram'></i></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
