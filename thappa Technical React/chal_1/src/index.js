import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const wish = {
  mrng : "Good Mornig",
  evng : "Good Evenig",
  night : "Good Night"
}
const cssStyle = {};


// let  curr_time =  new Date(1999,2,7,15);

let  curr_time =  new Date(1999,2,7,24);
let curr_Hr = curr_time.getHours();

let greeting = "";
if(curr_Hr >= 1 && curr_Hr <=12 ){
  cssStyle.color = "green"
  greeting = wish.mrng;
}
else if(curr_Hr>= 12 && curr_Hr <= 19 ){
  greeting = wish.evng
  cssStyle.color = "red"
}
else{
  greeting = wish.night
  cssStyle.color = "Blue"
}

root.render(
  <React.StrictMode>
   <>
   <br/>
    <small>Time : {curr_Hr} am/pm </small>
    <h1>Hello Sir, <span style={cssStyle}>{greeting}  </span> </h1>
   </>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
