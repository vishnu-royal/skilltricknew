import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/style.css'; // Optional CSS

const Navbar = () => {
  return (
    <header className="bg-theme">
      <div className="container nav-desktop">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <nav className="navbar navbar-expand-sm">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img className="logo-img" src="assets/images/Logo.png" alt="Logo" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        Who We Are
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/services">
                        What We Do
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/services">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link className="btn btn-bordered" to="/register">
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn btn-bordered" to="/login">
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
