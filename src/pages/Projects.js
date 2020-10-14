import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import ProjectContainer from "../components/ProjectContainer";

function Projects() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="container top-margin center">
      <div className="row">
        <div className="col s12 xl10 offset-xl1">
          <ul className="collapsible grey lighten-5">
            <ProjectContainer
              icon="directions_bike"
              title="MERN Health Tracker"
              description={
                "The 'My Exercise Rest & Nutrition' (MERN) Health Tracker is the final group project created in the Web Development Bootcamp. This app is a full MERN stack app (MySQL, Express, React, Node) and utilizes JWT for user authentication."
              }
              technologies={[
                "JavaScript",
                "React",
                "JWT",
                "Material UI",
                "axios",
                "bcryptjs",
                "dotenv",
                "Express",
                "passport / passport-local",
                "Sequelize / sequelize-cli",
              ]}
              repo="https://github.com/jessicamenius/health_tracker"
              app="https://group4-mern-tracker.herokuapp.com/"
            />

            <ProjectContainer
              icon="book"
              title="Shoequelize"
              description="Shoequelize is a group project developed in UC Berkeley Extension Program Web Development Bootcamp. The brief was to use bcrypt, passport, and MySQL to power a website that can display user-specific information."
              technologies={[
                "JavaScript / jQuery / ajax",
                "axios",
                "bcryptjs",
                "dotenv",
                "express / express-session",
                "jest",
                "MySQL2",
                "passport / passport-local",
                "Sequelize / sequelize-cli",
              ]}
              repo="https://github.com/jessicamenius/Shoequelize"
              app="https://jm-shoequelize.herokuapp.com/"
            />

            <ProjectContainer
              icon="videogame_asset"
              title="Games App"
              description="From a landing page, 6 games developed by individual team members are available for play. The page can be toggled between light and dark mode.."
              technologies={[
                "JavaScript / jQuery / ajax",
                "Local Storage",
                "Third-party  API",
              ]}
              repo="https://github.com/jessicamenius/GamesApp"
              app="https://jessicamenius.github.io/GamesApp/Index"
            />

            {/* <ProjectContainer
              icon="cloud"
              title="Global Weather Application"
              description="This weather application was created as a homework project for className. We were challenged to use the OpenWeatherMap API and Bootstrap to create a weather dashboard that could search any city or town."
              technologies={[
                "JavaScript / jQuery / ajax",
                "Local Storage",
                "Third-party (OpenWeatherMap) API",
              ]}
              repo="https://github.com/MatWilmot/homework-06-weather-dashboard"
              app="https://matwilmot.github.io/homework-06-weather-dashboard/"
            />

            <ProjectContainer
              icon="videogame_asset"
              title="Video Game Quiz"
              description="This video game quiz was created as a homework project for className. It uses JavaScript to dynamically update the contents of the screen between questions. High scores are sorted from local storage by score into an array and used for a leader board."
              technologies={["JavaScript / jQuery / ajax", "Local Storage"]}
              repo="https://github.com/MatWilmot/Homework-04-Quiz"
              app="https://matwilmot.github.io/Homework-04-Quiz/index.html"
            />

            <ProjectContainer
              icon="lock_outline"
              title="Password Generator"
              description="This super simple password generator was an early homework project designed to test some concepts I'd been learning in className. It takes given parameters and generates a random string based on them."
              technologies={["JavaScript"]}
              repo="https://github.com/MatWilmot/homework-03-password-generator"
              app="https://matwilmot.github.io/homework-03-password-generator/"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
