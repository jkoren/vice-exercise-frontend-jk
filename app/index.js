const { Typography } = require('@material-ui/core');
var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <Typography>
          Hello world from Exercise-Frontend-JK
        </Typography>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)