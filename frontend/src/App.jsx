import React from 'react'
import { Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Details from './pages/Details'

const App = () => {
  return (
    <div>
      <>
       <Home />
       <Search />
       <Details />
      </>
    </div>
  )
}

export default App