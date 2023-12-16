import React from 'react';
import { Link } from 'react-router-dom';
import logob from '../component/logob.png';

const Navbar: React.FC = () => {
  const navbarBrandStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: '10px',
    padding: '10px',
    display: 'inline-block',
  };

  const navtext: React.CSSProperties = {
    color: 'red',
    borderRadius: '10px',
    height: '70%',
    padding: '10px',
    width: '5rem',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={logob}
            style={{ maxHeight: '5rem', maxWidth: '190px', marginRight: '5px', borderRadius: '10px' }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="#" to={'/'}>
                <b style={navtext}>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="#" to={'/Bookdata'}>
                <b style={navtext}>Login</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="#" to={'/Bookdata'}>
                <b style={navtext}>Sign in</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="#" to={'/Bookdata'}>
                <b style={navtext}>All Books</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="#" to={'/about'}>
                <b style={navtext}>About</b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
