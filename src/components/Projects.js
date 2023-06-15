import React from "react";

const Projects = () => {
  return (
    <main id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div class="project">
          <img
            src={require("../images/muse img.png")}
            alt="Recipe Muse Front Page"
          />
          <h2>Recipe Muse</h2>
          <p>An Easy Recipe Generator!</p>
          <span>JavaScript/AJAX/localStorage</span>
          <a
            href="https://malachigamblin.github.io/Recipe-Muse/"
            target="_blank"
          >
            View Project
          </a>
          <a
            href="https://github.com/malachigamblin/Recipe-Muse"
            target="_blank"
          >
            View Repository
          </a>
        </div>
        <div class="project">
          <img
            src={require("../images/weather img.png")}
            alt="weather dashboard image"
          />
          <h2>Weather Dashboard</h2>
          <p>Find The Weather Anywhere!</p>
          <span>JavaScript/BootStrap/jQuery</span>
          <a
            href="https://malachigamblin.github.io/Weather-Dashboard/"
            target="_blank"
          >
            View Project
          </a>
          <a
            href="https://github.com/malachigamblin/Weather-Dashboard-Challenge"
            target="_blank"
          >
            View Repository
          </a>
        </div>
        <div class="project">
          <img
            src={require("../images/CodeBytes img.png")}
            alt="CodeBytes front page"
          />
          <h2>CodeBytes</h2>
          <p>Connect Over Tech!</p>
          <span>JavaScript/Handlebars/Node.js</span>
          <a href="https://mighty-hamlet-73208.herokuapp.com/" target="_blank">
            View Project
          </a>
          <a href="https://github.com/malachigamblin/CodeBytes" target="_blank">
            View Repository
          </a>
        </div>
        <div class="project">
          <img src={require("../images/jot img.png")} alt="jot front page" />
          <h2>jot</h2>
          <p>Note-Taking App!</p>
          <span>JavaScript/Node.js/express</span>
          <a
            href="https://boiling-everglades-88636.herokuapp.com"
            target="_blank"
          >
            View Project
          </a>
          <a href="https://github.com/malachigamblin/jot" target="_blank">
            View Repository
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
