var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');
import Main from './Main.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

class App extends React.Component {
  render() {
    return (
    <Router>
      <Switch>
        {/* <Route exact path="/bob" component={Main} />  */}
        {/* <Route path="/bob">
          <Main />
        </Route>  */}
        {/* <Route path="/:showId" component={Main} />  */}
        <Route exact path="/" component={Main} /> 
      </Switch>
    </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)