var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');
import Main from './Main.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    //   <Router>
    //     <Switch>
    //       <Route exact path="/" component={Main} /> 
    //     </Switch>
    // </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)