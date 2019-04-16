import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import ReactApp from "./ReactApp";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

ReactDOM.render(<ReactApp />, document.getElementById("app"));
