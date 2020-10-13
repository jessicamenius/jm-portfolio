import React from "react";

function Resume() {
  return (
    <div className="container">
      <ul class="collapsible">
        <li>
          <div class="collapsible-header">
            <i class="material-icons">work</i>Work Experience
          </div>
          <div class="collapsible-body">
            <ul class="collapsible">
              <li>
                <div class="collapsible-header">Cisco Systems</div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>

              <li>
                <div class="collapsible-header">Capital One</div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>

              <li>
                <div class="collapsible-header">United Airlines</div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>

              <li>
                <div class="collapsible-header">Envestnet Asset Management</div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div class="collapsible-header">
            <i class="material-icons">school</i>Education
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Resume;
