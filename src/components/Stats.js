import React from "react";
import { stats } from "../data";
import parse from "html-react-parser";

const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div key={index} class="stats__box">
            <h3 class="stats__no">{no}</h3>
            <p class="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
