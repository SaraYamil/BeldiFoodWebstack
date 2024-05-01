import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h1 className="title">Beldi Food</h1>
      </div>

      <div>
        <h2>Location</h2>
        <p>Marrakech, Morocco</p>
      </div>

      <div>
        <h2 className="planning">Opening Hours</h2>
        <p>Monday - Sunday</p>
        <p>08:00 AM - 11:00 PM</p>
        <p>Tel: 06-61-02-0340 </p>
      </div>

      <div>
        <h2>Social Media</h2>
        <div className="social-icons">
          <a href="https://twitter.com/BeldiFood" target="_blank" rel="noopener noreferrer" title="This takes you to Beldi Food Twitter Profile"><i className="fab fa-twitter-square"></i></a>
          <a href="https://www.instagram.com/beldifoodinsta/" target="_blank" rel="noopener noreferrer" title="This takes you to Beldi Food Instagram page"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCYqJD6bMBULbTOHVavh86kA" target="_blank" rel="noopener noreferrer" title="This takes you to Beldi Food Youtube Channel"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <div>
        <h2 className="copyright">&copy; 2024 BeldiFood. All rights reserved.</h2>
        <p>LAHNINE FATIMA EZZAHRA&nbsp;&nbsp;&nbsp;&nbsp;YAMIL SARA</p>
      </div>
    </footer>
  );
}
