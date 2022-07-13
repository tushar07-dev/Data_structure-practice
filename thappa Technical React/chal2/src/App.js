import {add , subs , multi , divi} from "./Calculations"

function App() {
  return (
    <div className="App">
      <>
      <ul>
        <li> sum of numb is {add(30,4)} </li>
        <li> substract of numb is {subs(30,4)} </li>
        <li> multiply of numb is {multi(30,4)} </li>
        <li> divide of numb is {divi(30,4)} </li>
      </ul>
      </>
    </div>
  );
}

export default App;
