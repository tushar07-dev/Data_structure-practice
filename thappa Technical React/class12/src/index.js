import ReactDOM from"react-dom";
import React from "react";

const name="Tushar";
const currDate =  new Date().toLocaleDateString();
const currTime =  new Date().toLocaleTimeString();
ReactDOM.render(
  <>

 <h1> Hello, My name is {name} </h1>
 <p> Current Date is = {currDate} </p>
 <p> Current Date is = {currTime} </p>
 </>,
  document.getElementById("root")
);
