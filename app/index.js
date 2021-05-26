var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');
import Main from './Main.js'

class App extends React.Component {

  componentDidMount(){
    const parsedUrl = new URL(window.location.href)
    const showId = parsedUrl.searchParams.get("id")
    console.log(showId)
  }

  render() {
    return (
      <div>
        <Main
          // showId={showId}
          // index.js:56 Uncaught ReferenceError: showId is not defined
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)