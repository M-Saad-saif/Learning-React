// import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const navStyle = {
    backgroundColor: props.mode === 'dark' ? '#19222dff' : '#c5c3c3ff',
    color: props.mode === 'dark' ? 'white' : '#1f2937',
  };

  return (
    <nav style={navStyle}>
      <div className="navbar" style={navStyle}>
        <a href="/" className="heading" style={{color: props.mode === 'dark' ? 'white' : '#1f2937'}}>
          {props.title}
        </a>  
        <ul className="nav-links">
          <li>
            <a href="/" style={{color: props.mode === 'dark' ? 'white' : '#1f2937'}}>{props.HomeTitle}</a>
          </li>
          <li>
            <a href="/" style={{color: props.mode === 'dark' ? 'white' : '#1f2937'}}>{props.AboutTitle}</a>
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
