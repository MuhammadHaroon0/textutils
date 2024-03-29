import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          {/* <li className="nav-item active">
            <a className="nav-link" href="/about">
              {props.Abouttxt} <span className="sr-only">(current)</span>
            </a>
          </li> */}
          
        </ul>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}}>Enable Dark Mode</label>
        </div>
      
      </div>
    </nav>
    </div>
    
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Abouttxt: PropTypes.string.isRequired,
};
Navbar.defaultProps={
    title:"Text Utilitites",
    Abouttxt:"About",
}