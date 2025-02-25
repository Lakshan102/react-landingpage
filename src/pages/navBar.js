import React, { useState, useEffect } from 'react';
import './navBar.css';
import logo_light from '../img/logo-black.png';
import logo_dark from '../img/logo-light.png';
import toggle_dark from '../img/day.png';
import toggle_light from '../img/night.png';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  }
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);


    return () => clearInterval(timer);
  }, []
  );


  return (
    <div className='navbar'>
      <img src={theme === 'light' ? logo_dark : logo_light} alt="Logo" className='logo' />
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/About'>About</a>
        <a href='/Contact'>Contact</a>

      </div>
      <div className='toggle'>
        <img
          src={theme === 'light' ? toggle_light : toggle_dark}
          alt="Toggle Theme"
          className='toggle-icon'
          onClick={toggleTheme}
        />
        <h2>{dateTime.toLocaleTimeString()}</h2>
      </div>

    </div>
  );
}
