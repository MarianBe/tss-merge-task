import ErrorHandler from 'components/error/errorHandler'
import Header from 'components/header'
/* Pages */
import Home from 'pages/home'
import Impressum from 'pages/impressum'

import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const Navigation = props => {
  return (
    <ErrorHandler>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/impressum">
            <Impressum />
          </Route>
          <Route path="/">
            <Redirect
              to={{
                pathname: '/home'
              }}
            />
          </Route>
        </Switch>
      </Router>
    </ErrorHandler>
  )
}

export default Navigation
