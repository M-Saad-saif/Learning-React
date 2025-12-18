import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navStyle = {
    backgroundColor: props.mode === "dark" ? "#19222dff" : "#c5c3c3ff",
    color: props.mode === "dark" ? "white" : "#1f2937",
  };

  const toggleDrawer = () => setDrawerOpen((v) => !v);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <nav style={navStyle}>
      <div className="navbar" style={navStyle}>
        <Link
          to="/"
          className="heading"
          style={{ color: props.mode === "dark" ? "white" : "#1f2937" }}
        >
          {props.title}
        </Link>

        <button
          className="menu-button"
          onClick={toggleDrawer}
          aria-label="Open menu"
        >
          <span className="hamburger" aria-hidden="true"></span>
        </button>

        <ul className="nav-links">
          <li>
            <Link
              to="/"
              style={{ color: props.mode === "dark" ? "white" : "#1f2937" }}
            >
              {props.HomeTitle}
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              style={{ color: props.mode === "dark" ? "white" : "#1f2937" }}
            >
              {props.AboutTitle}
            </Link>
          </li>
        </ul>

        <div className="btns">
          <button
            type="button"
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } mx-2`}
            onClick={props.toggleMode}
          >
            {props.mode === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          <button
            type="button"
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            Search
          </button>
        </div>

        {/* overlay behind drawer */}
        <div
          className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
          onClick={closeDrawer}
        ></div>

        {/* mobile right-side drawer */}
        <aside
          className={`mobile-drawer ${drawerOpen ? "open" : ""}`}
          style={{
            backgroundColor: navStyle.backgroundColor,
            color: navStyle.color,
          }}
        >
          <button
            className="drawer-close"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="drawer-nav">
            <Link
              to="/"
              onClick={closeDrawer}
              style={{ color: navStyle.color }}
            >
              {props.HomeTitle}
            </Link>
            <Link
              to="/About"
              onClick={closeDrawer}
              style={{ color: navStyle.color }}
            >
              {props.AboutTitle}
            </Link>
            <button
              type="button"
              className={`drawer-mode-btn btn-outline-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              onClick={() => {
                props.toggleMode();
              }}
            >
              {props.mode === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </nav>
        </aside>
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
