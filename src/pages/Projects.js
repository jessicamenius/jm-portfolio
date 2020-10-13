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
                "The 'My Exercise Rest & Nutrition' (MERN) health tracker was created as a final project for my full stack web development classes. It uses the full MERN stack (MySQL, Express, React, Node) and utilized JWT for user authentication."
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
              description="Book It was created as a group project in class. The brief was to use bcrypt, passport, and MySQL to power a website that can display user-specific information."
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
              repo="https://github.com/MatWilmot/bucketList"
              app="https://group4-bucket-list.herokuapp.com/"
            />

            <ProjectContainer
              icon="videogame_asset"
              title="Games App"
              description="Lorem ipsum."
              technologies={[
                "JavaScript / jQuery / ajax",
                "Local Storage",
                "Third-party (giphy) API",
              ]}
              repo="https://github.com/MatWilmot/Gif-search-app"
              app="https://matwilmot.github.io/Gif-search-app/"
            />

            <ProjectContainer
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
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
