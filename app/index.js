var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)