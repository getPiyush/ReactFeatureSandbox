import React from "react";

export function logMessages(message) {
  console.log(message);
}

export function generateRandomizedJSX(str) {
  let outJsx = [];
  str.split(" ").forEach((element, index) => {
    let style = {
      color: "#" + getRandom(6),
      fontSize: getRandom(2) + "px",
      backgroundColor: getRandom(3) % 2 ? "black" : "white"
    };

    outJsx.push(
      <span key={index} style={style}>
        {element}&nbsp;
      </span>
    );
  });

  return <p>{outJsx}</p>;
}

function getRandom(length) {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
  );
}
