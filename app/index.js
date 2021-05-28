var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');
import Main from './Main.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const parsedUrl = new URL(window.location.href);
  const showId = parsedUrl.searchParams.get("id")

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main 
            showId={showId}
          />
        </Route> 
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)