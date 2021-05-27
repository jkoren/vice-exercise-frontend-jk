import React from "react";
// import ReactDOM from "react-dom";
require('./application.css');
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main.js";
const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;

// var React = require('react');
// var ReactDOM = require('react-dom');
// require('./application.css');
// import Main from './Main.js'

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

// // const App = (props) => {
// // //   return (
// // //     <div className="App">
// // //       <Router>
// // //         <Switch>
// // //           <Route path="/" component={Main} />
// // //         </Switch>
// // //       </Router>
// // //     </div>
// // //   );
// //  <Main />
// // }


// export default App


// class App extends React.Component {
  
//   componentDidMount(){
//       const parsedUrl = new URL(window.location.href)
//       const showId = parsedUrl.searchParams.get("id")
//       console.log("showId")
//       console.log(showId)
//     }

//   render() {
//       console.log("this.showId")
//       console.log(this.showId)
//       return (
//           <div>
//             <Main
//               showId={this.showId}
//             />
//           </div>
//         )
//       }
//     }
    
//   ReactDOM.render(
//       <App />,
//       document.getElementById('app')
//     )
