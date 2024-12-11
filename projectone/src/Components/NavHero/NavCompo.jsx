import React from 'react'

const NavCompo = () => {

  return (
    <nav className="nav" style={{backgroundColor: "green", borderRadius: 10}}>
      <div className="logo">
        <img src="src/Components/NavHero/navbar.png" alt="MedLab Logo"
          className="logo-image"
        />
        <span className="logo-text">MedLab</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">Service</li>
        <li className="nav-item">Packages</li>
        <li className="nav-item">Pricing</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact</li>
      </ul>
      <button className="sign-up-button">Sign up</button>

     
     
    </nav>



  );



  

}

export default NavCompo
