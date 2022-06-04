import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className= {`App ${isLight  ?  "light"  :  "dark"} `} >
      <Navbar></Navbar>
    </div>
  );
}

export default App;


// declared "isLight";
//toook its initial value from ThemeContext ;
//
// return className as if   const isLight is "light" then className will be  "light"
// else   const isLight is  "dark";
