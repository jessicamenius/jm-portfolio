import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

function Header() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper white black-text">
          <Link to="/" className="brand-logo black-text">
            Jessica Menius
          </Link>
          <a data-target="mobile-demo" className="sidenav-trigger black-text">
            <i className="material-icons black-text">menu</i>
          </a>
          <ul className="right hide-on-med-and-down black-text">
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Technical Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li className="black-text">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="black-text">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="black-text">
          <Link to="/skills">Technical Skills</Link>
        </li>
        <li className="black-text">
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
