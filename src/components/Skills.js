import React from "react";
import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div class="progress__box" key={index}>
            <div class="progress__circle">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={7.5}
              />
              <h3 class="skill__title">{title}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
