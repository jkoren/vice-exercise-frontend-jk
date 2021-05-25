import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Main from './Main.js'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/shows/:id" component={Main} /> 
        <Route exact path="/" component={Main} /> 
      </Switch>
    </Router>
  )
}