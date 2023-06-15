import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Information</a>
            </li>
          </ul>
        </nav>
        <div className="intro">
          <img
            src={require("../images/me.jpeg")}
            alt="Profile Picture"
            className="profile-picture"
          />

          <h1>Malachi Gamblin</h1>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
