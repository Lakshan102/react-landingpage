/* import React from 'react'
import './navBar.css'
import logolight from '../img/logo-black.png';
import toggle from '../img/night.png';

function header() {


  
  return (
    <div className='navbar'>
      <img className='logo' src={logolight} alt='logo'></img>
      <ul>
        <a href='http://localhost:3000/'>Home</a>
        <a href='http://localhost:3000/about'>About</a>
        <a href='http://localhost:3000/contact'>Contact</a>
      </ul>

      <div className='toggle'>
        <img src={toggle} alt='toggle'></img>
      </div>
    </div>
  )
}

export default header */

import React, { useState, useEffect } from 'react';
import './navBar.css';
import logo_light from '../img/logo-black.png';
import logo_dark from '../img/logo-light.png';
import toggle_dark from '../img/day.png';
import toggle_light from '../img/night.png';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
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
        }, []);


  return (
    <div className='navbar'>
      <img src={theme==='light'?logo_light:logo_dark} alt="Logo" className='logo' />
      <div className='links'>
        <a  href='/'>Home</a>
        <a  href='/About'>About</a>
        <a  href='/Contact'>Contact</a>
        
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
