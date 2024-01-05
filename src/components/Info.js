import React from "react";
import { personalInfo } from "../data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li key={index} class="info__item">
            <span class="info__title">{title}</span>
            <span class="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
