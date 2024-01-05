import React from "react";
import Info from "../components/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../assets/dejan_cv.pdf";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import ResumeItem from "../components/ResumeItem";
import { resume } from "../data";

const About = () => {
  return (
    <main class="section container">
      <section class="about">
        <h2 class="section__title">
          About <span>Me</span>
        </h2>
        <div class="about__container grid">
          <div class="about__info">
            <h3 class="section__subtitle">Personal infos</h3>
            <il class="info__list grid">
              <Info />
            </il>
            <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div class="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div class="separator"></div>
      <section class="skills">
        <h3 class="section__subtitle subtitle__center">My Skills</h3>
        <div class="skills__container grid">
          <Skills />
        </div>
      </section>
      <div class="separator"></div>
      <section class="resume">
        <h3 class="section__subtitle subtitle__center">
          Experience & Education
        </h3>
        <div class="resume__container grid">
          <div class="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div class="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
