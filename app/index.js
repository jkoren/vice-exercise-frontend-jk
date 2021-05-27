var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');
import Main from './Main.js'

const [shows, setShows] = useState([])

class App extends React.Component {
  
  componentDidMount(){
    const parsedUrl = new URL(window.location.href)
    const showId = parsedUrl.searchParams.get("id")
    console.log("showId")
    console.log(showId)
  }

  render() {
    console.log("this.showId")
    console.log(this.showId)
    return (
      <div>
        <Main
          showId={this.showId}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)