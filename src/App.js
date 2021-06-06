import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GithubUser from './pages/GithubUser'
import { GithubProvider } from './context/context'
import Error from './pages/Error'

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
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </Router>
      </GithubProvider>
    </>
  )
}
