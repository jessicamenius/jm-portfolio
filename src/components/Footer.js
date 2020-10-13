import React from "react";
import linkedIn from "../components/img/linkedin_logo.png";
import github from "../components/img/github_logo.png";
import ig from "../components/img/ig_logo.png";
import medium from "../components/img/circled_medium_svg5-512.png";

function Footer() {
  return (
    <footer className="page-footer grey darken-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Contact Information</h5>
            <p className="grey-text text-lighten-4">
              <i class="material-icons">email</i>
              &nbsp; jessicamenius@gmail.com
            </p>
            <p className="grey-text text-lighten-4">
              <i class="material-icons">phone</i>
              &nbsp; +1 314 517 8505
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Find me online</h5>
            <a href="https://www.linkedin.com/in/jessicamenius/">
              <img className="contact-icon" src={linkedIn} alt="linkedIn" />
            </a>
            &nbsp; &nbsp;
            <a href="https://github.com/jessicamenius">
              <img className="contact-icon" src={github} alt="GitHub" />
            </a>
            &nbsp; &nbsp;
            <a href="https://www.instagram.com/jmonkey1283/">
              <img className="contact-icon" src={ig} alt="Instagram" />
            </a>
            &nbsp; &nbsp;
            <a href="https://medium.com/@jessicamenius">
              <img className="contact-icon" src={medium} alt="Medium" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright Jessica Menius
          <a
            className="grey-text text-lighten-4 right"
            href="https://1drv.ms/w/s!Am-87QIldxPtaz6yI0ZYMgnx3kU"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
