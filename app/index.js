var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');
import Main from './Main.js'

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)