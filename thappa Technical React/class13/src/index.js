import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

const name = "Tushar";
const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/150/300";
const img3 = "https://picsum.photos/200/300";

const links1 = "https://www.google.com/";
const links2 = "https://www.flipkard.com/";
const links3 = "https://www.amazon.com/";


ReactDOM.render(
<>
<p>Now You can edit following text, By ContentEditable Atribute</p>
  <h1 contentEditable="true" className="my__name" > My name is {name} </h1>
  <p>CLICKABLE IMAGE LINKS </p> 


  <a href="links1" target="_blank">  <img src= {img1} alt="random Picture"/> </a>  
  <a href="links2" target="_blank">  <img src= {img2} alt="random Picture"/> </a>  
  <a href="links3" target="_blank">  <img src= {img3} alt="random Picture"/> </a>  
  
</>
  , 
  document.getElementById("root")
);  