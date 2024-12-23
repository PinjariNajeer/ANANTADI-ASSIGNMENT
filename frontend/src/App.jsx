import React from 'react'
import { Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Details from './pages/Details'

const App = () => {
  return (
    <div>
      <>
        <Router>
          <Route exact path='/' Component={<Home />}/>
          <Route exact path='/serch' Component={<Search />}/>
          <Route exact path="/videos/:id" Component={Details />} />
        </Router>
      </>
    </div>
  )
}

export default App