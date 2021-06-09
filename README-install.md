# React Installation in Exercise-Frontend Directory
This is a log of how this repo was created.

1.  npm init -y
2.  npm install react react-dom
3.  edit .gitignore - files not to upload to git, but will be created with npm install - add:
```    
  .DS_Store
  dist
```
4. create directory /app and move index.html, index.js and application.scss into the file.  create the file `application.css`

5. index.js is the starting point of what is being rendered.  index.js is:
```
var React = require('react');
var ReactDOM = require('react-dom');
require('./application.css');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world.
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
```
later, I changed `index.js` to be a function component instead of a class component based on index created by `create-react-app` - as follows:
```
import React from 'react';
import ReactDOM from 'react-dom';
import './application.css'
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
```
6. npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
  
7. touch webpack.config.js
8. webpack.config.js tells webpack how to combine all the modules together (where the entry point is) and where to put the combined file. webpack.config.js says to run the babel-loader on javascript files, and the style-loader and css-loader on .css files.  webpack.config.js is:

```
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js' 
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  mode: 'development', 
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
```
9. update index.html file to be:
```
<!DOCTYPE html>
<html>
  <head>
    <title>
      Vice React Project
    </title>
  </head>

  <body>
     <div id="app">
       <!-- the entire react app will be rendered here  -->
     </div>
  </body>
</html>
```
10. add this text to package.json right after   `"main": "index.js",` this will let babel transform ES6 syntax into ES5, and transform jsx to javascript.
```
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
```
11. in package.json, add the script
`"create": "webpack"`.  This runs the webpack command when running `npm run create`

12. update application.css to be:
```
body {
  background: lightblue;
}
```

13. `npm run create` which creates the 2 files in the /dist folder, including index_bundle.js

14. Finally, change the script in package.json, from script     
`"create": "webpack"`
to
`"start": "webpack serve --open",`
and this will 1) build the project 2) save to local cache and 3) open the app in a browser every time we run `npm run start` 

15. install react-router-dom for routes: `npm install --save react-router-dom`

16. install an older version of node for compability
```
nvm install 12.14.1
```

# to store remote to github
1. create a repo: vice-exercise-frontend-jk
2. git remote set-url origin https://github.com/jkoren/vice-exercise-frontend-jk.git

# adding material ui
1. `npm install @material-ui/core`
2. `npm install material-icons`
3. `npm install @material-ui/icons`
4. `npm install @fontsource/roboto` 
5. add in <head> of index.html
```
  <!-- Fonts to support Material Design -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <!-- Icons to support Material Design -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <!-- to make Material Design responsive -->
   <meta name="viewport" content="width=device-width" />
  ```
6. change md breakpoint from 960px to 980px
add to index.js
```
  import { themeProvider, createMuiTheme } from "@material-ui/core/styles"

  const theme = createMuiTheme({
    breakpoints: {
      values: {
        md: 980,
      },
    },
  })
```
# add jest for testing
1. npm install --save-dev jest
2. npm i --save-dev @testing-library/react react-test-renderer`
3. add to package.json under scripts `"test": "jest react-scripts test --env=jsdom","`

# to run tests
```
npm run test
```

# install a linter
1. npm install -g eslint
2. eslint --init  (creates config file: `eslintrc.json`)
answer these questions
```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```
3. npm install -g eslint-plugin-react
4. add this to eslintrc.json to automatically detect react version and avoid linter error
```
"settings": {
    "react" : {
        "version" : "detect"
    }
}
```
# To install:
```
1. clone the repo
2. run npm install
```
# To start the servers
to start front-end server (react):
```
npm run start
```

to start back-end server (node):
```
nvm use 12.14.1
yarn start-api 
```

# To run locally:
```
http://localhost:8080/
```
# to run eslint
```
eslint eslint ./app/*.js
```
# to run on heroku
```
heroku config:set NODE_ENV=production
```

references:

TylerMcGinnis.com
React (without Create React App) with Babel 7, Webpack 4, and React 16
https://www.youtube.com/watch?v=Zb2mQyQRwqc

techsith:
React unit testing with Jest & React-testing-library
https://www.youtube.com/watch?v=3e1GHCA3GP0

