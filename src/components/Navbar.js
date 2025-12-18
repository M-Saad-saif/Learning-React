// import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

export default function Navbar(props) {
  const navStyle = {
    backgroundColor: props.mode === 'dark' ? '#19222dff' : '#c5c3c3ff',
    color: props.mode === 'dark' ? 'white' : '#1f2937',
  };

  return (
    <nav style={navStyle}>
      <div className="navbar" style={navStyle}>
        <Link to="/Home" className="heading" style={{color: props.mode === 'dark' ? 'white' : '#1f2937'}}>
          {props.title}
        </Link>  
        
        <ul className="nav-links">
          <li>
            <Link to="/Home" style={{color: props.mode === 'dark' ? 'white' : '#1f2937'}}>{props.HomeTitle}</Link>
          </li>
          <li>
            <Link to="/About" style={{color: props.mode === 'dark' ? 'white' : '#1f2937'}}>{props.AboutTitle}</Link>
          </li>
        </ul>

        <div className="btns">
          <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={props.toggleMode}>
            {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>

          <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  HomeTitle: PropTypes.string.isRequired,
  AboutTitle: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "LearnReact",
  HomeTitle: "Home",
  AboutTitle: "About",
};
