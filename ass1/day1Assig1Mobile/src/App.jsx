import "./App.css";
import { Heading1, Heading2 } from "./components/Heading";
import List from './components/List';
function App() {

  const MobileOs = ['Android' , 'iPhone' , 'BlackBerry' , 'Windows Phone']
  const MobManuf = ['Samsung' , 'Apple' ,'HTC', 'Micromax'];

  return (
        <div className="App">
          <div>
            <Heading1/>
            <List data={MobileOs}></List>
            <Heading2/>
            <List data={MobManuf}></List>
          </div>
        </div>
      ); }
    export default App;



