import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";


function Home() {

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="container">
      <br/>
      <div className="row">
        <div className="col s12 m4 l8">
          <div className="card grey darken-1 white-text">
            <div className="card-content white-text">
                <p>Full Stack Web Developer with a background in Customer Success, Recruiting, and Financial Services and life-long dedication to learning. Strong problem-solving skills, excellent verbal, written, communication, and presentation skills. Strong ability to create and embrace new systems, processes, and lead many projects at once with excellent time management skills.</p>
            </div>
            <div className="card-action ">
              <a href="https://docs.google.com/document/d/1ARLJCCoiAYgrSFI3quULnzq-x9Z1oklE5AEAujG1h6k/edit?usp=sharing">Resume</a>
              &nbsp; &nbsp;
              <a href="https://www.linkedin.com/in/jessicamenius/">LinkedIn</a>
              &nbsp; &nbsp;
              <a href="https://github.com/jessicamenius">GitHub</a>
            </div>  
          </div>
        </div>
      </div>
  </div>
  );
}

export default Home;
