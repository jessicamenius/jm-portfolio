import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function Resume() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="container top-margin center">
        <br/>

      <div className="row">
        <div className="col s12 xl10 offset-xl1">
          <ul className="collapsible grey lighten-5">
          <li class="active">
              <div className="collapsible-header">
                <i className="material-icons">work</i>Work Experience
              </div>
              <div className="collapsible-body">
                <ul className="collapsible">
                  <li>


                    <div className="collapsible-header">Cisco Systems</div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header">Capital One</div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                

                  <li>
                    <div className="collapsible-header">United Airlines</div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header">
                      Envestnet Asset Management
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <div className="collapsible-header">
                <i className="material-icons">school</i>Education
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
