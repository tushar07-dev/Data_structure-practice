import React from 'react'
import Pagination from './pages/Pagination'
import Search from './pages/Search'
import Stories from './pages/Stories'

// context
// import { useContext } from 'react';
// import { AppContext } from './Context/Contextapi';


const App = () => {
  return (
    <>
    <h1>Welcome to NEWS Webpage  </h1>
      <Search/>
      <Stories/>
      <Pagination/>
    </>
  )
}

export default App