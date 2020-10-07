import React from "react";
import linkedIn from "../components/img/linkedin_logo.png";
import github from "../components/img/github_logo.png";
import ig from "../components/img/ig_logo.png";

function Footer() {
  return (
    <div className="row center">
      <div className="col s12">
        <footer className="footer">
          <container>
            <div className="row center">
              <div className="col s12">
                <p>Find me online</p>
                <a href="https://www.linkedin.com/in/jessicamenius/">
                  <img className="contact-icon" src={linkedIn} alt="linkedIn" />
                </a>
                &nbsp;
                <a href="https://github.com/jessicamenius">
                  <img className="contact-icon" src={github} alt="GitHub" />
                </a>
                &nbsp;
                <a href="https://www.instagram.com/jmonkey1283/">
                  <img className="contact-icon" src={ig} alt="Instagram" />
                </a>
              </div>
            </div>
          </container>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
