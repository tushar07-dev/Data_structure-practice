import "./App.css";
import Logo from "./component/Logo";
import Links from "./component/Links";
import Button from "./component/Button";

let arr = [
  { id: 1, category: "Services" },
  { id: 2, category: "Projects" },
  { id: 3, category: "About" },
];

function App() {
  return (
    <div className="App">
      <div>
        <Logo></Logo>
        <div id="links">
          {arr.map((el) => (
            <Links key={el.id} value={el}></Links>
          ))}
        </div>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;