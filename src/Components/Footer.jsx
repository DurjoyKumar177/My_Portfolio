import React from 'react';
import logo from '/logo.jpg';
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content">
      <div>
        <a href="/" className='flex flex-col items-center gap-2'>
          <img src={logo} alt="Logo" className="h-16 rounded-full" />
          Durjoy Kumar
        </a>
        <p>
          © {year}. All rights reserved by{' '}
          <a href="https://themeforest.net/user/zebrainfotech/portfolio" target="_blank" className="link link-primary">
            Durjoy Kumar
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;