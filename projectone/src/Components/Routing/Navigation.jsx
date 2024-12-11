import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className='container'>
        <ul style={{ listStyle: 'none', fontSize: 20 }}>
          <li><Link to="menu">Menu</Link></li> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
