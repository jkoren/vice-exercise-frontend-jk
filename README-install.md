# React Installation in Exercise-Frontend Directory
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
6. npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
  
results: 
```
updated 10 packages and audited 839 packages in 31.875s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
  ```
7. touch webpack.config.js
8. webpack.config.js tells webpack how to combine all the modules together (where the entry point is) and where to put the combined file. webpack.config.js says to run the babel-loader on javascript files, and the style-loader and css-loader on .css files. initially set up for building in development, later change to production.  webpack.config.js is:

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
  background: green;
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

result: added 37 packages from 49 contributors and audited 876 packages in 17.671s

2. `npm install @fontsource/roboto` 

result: added 1 package from 1 contributor and audited 877 packages in 10.678s
(this may not be necessary.)

3. add in <head> of index.html
```
  <!-- Fonts to support Material Design -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <!-- Icons to support Material Design -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <!-- to make Material Design responsive -->
   <meta name="viewport" content="width=device-width" />
  ```
# add jest for testing
1. npm install --save-dev jest
2. npm i --save-dev @testing-library/react react-test-renderer
3. add to package.json under scripts `"test": "jest"`

# to run tests
```
npm run test
```
# to run the app
to start front end server (react):
```
npm run start
```

to start back end server (node):
```
nvm use 12.14.1
yarn start-api 
```

to run locally:
```
http://localhost:8080/
```
# to deploy to heroku

https://codeburst.io/deploy-your-webpack-apps-to-heroku-in-3-simple-steps-4ae072af93a8

1.  git push heroku master

# To install on another machine:
```
1. clone the repo
2. run npm install
```

TylerMcGinnis.com
React (without Create React App) with Babel 7, Webpack 4, and React 16
https://www.youtube.com/watch?v=Zb2mQyQRwqc

Kris Foster
React Testing Tutorial (Jest + React Testing Library)
https://www.youtube.com/watch?v=ML5egqL3YFE

How to Format Code in Markdown https://www.freecodecamp.org/news/how-to-format-code-in-markdown/