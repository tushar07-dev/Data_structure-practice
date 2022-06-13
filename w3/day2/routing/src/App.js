import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/products'element={<Products/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
