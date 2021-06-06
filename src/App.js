import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GithubUser from './components/GithubUser'
import { GithubProvider } from './context/context'

export const App = () => {
  return (
    <>
      <GithubProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/user/:username'>
              <GithubUser />
            </Route>
          </Switch>
        </Router>
      </GithubProvider>
    </>
  )
}
