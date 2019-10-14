import React from "react";
/* import monster from "../images/monster.png"; */
import "./Mistake.css";

const Mistake = () => {
  return (
    <div className="container">
      <img
        className="imgMistake"
        src=""
        alt="Image of a monster in black and white with his tongue hanging out"
      />
      <h1 className="txtMistake">¡Ups! Wrong place</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="refMistake">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default Mistake;
