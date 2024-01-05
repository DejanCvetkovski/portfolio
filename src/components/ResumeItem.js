import React from "react";
import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, desc }) => {
  console.log(typeof title, title);
  return (
    <div class="resume__item">
      <div class="resume__icon">{icon}</div>

      <span class="resume__date">{year}</span>
      <h3 class="resume__subtitle">{parse(title)}</h3>
      <p class="resume__description">{desc}</p>
    </div>
  );
};

export default ResumeItem;
