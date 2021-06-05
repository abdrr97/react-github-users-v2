import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GithubUser from './components/GithubUser'

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* HOME */}
          <Route exact path='/'>
            <Home />
          </Route>
          {/* USER */}
          <Route path='/user'>
            <GithubUser />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
