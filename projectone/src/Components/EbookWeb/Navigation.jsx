import React from "react";
import logo from "../../assets/images/logo.png";
// import '../../scss/bootstrap.scss'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand d-flex justify-content-start">
          <img src={logo} alt="Logo" width={225} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto d-flex justify-content-between w-30">
            <li className="nav-item mx-3">
              <a href="index.html" className="nav-link fw-semibold text-white">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a href="details.html" className="nav-link fw-semibold text-white">Details</a>
            </li>
            <li className="nav-item mx-3">
              <a href="details.html" className="nav-link fw-semibold text-white">Services</a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link btn btn-outline-info fw-semibold px-4 mx-4 text-white" style={{ border: '1px solid #6c757d' }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
