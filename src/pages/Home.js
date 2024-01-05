import React from "react";
import Profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section class="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div class="home__container">
        <div class="home__data">
          <h1 class="home__tittle">
            {" "}
            <span>I'm Dejan Cvetkovski.</span> Frontend Developer.
          </h1>
          <p className="home__description">
            Industry experienced React JS Frontend Developer specialized in
            building web applications. Proficient in HTML5, CSS3,
            JavaScript/ES6, plus modern libraries and frameworks (Hooks, Redux,
            UI frameworks...).
          </p>
          <Link to={"/about"} className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div class="color__block"></div>
    </section>
  );
};

export default Home;
