import React from"react";
import ReactDOM from"react-dom";
import { favProgm , myName , Name} from "./App";
import AnyNameDefaultCompo0 from "./App"
ReactDOM.render(
    <>
    <ol>
      <li>Thapa</li>
      {/* default export */}
      <li> {AnyNameDefaultCompo0 }  </li>
      
      {/* const variavle */}
      <li> {favProgm} </li>

      {/* Functions  */}
      <li>   {myName()}   </li>
      <li>   {Name()}   </li>
    </ol>
  </>,
 document.getElementById("root")
);  