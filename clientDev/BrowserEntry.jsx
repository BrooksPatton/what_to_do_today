const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./App')
const { match } = require('react-router')

match({history: App.History, routes: App.Routes}, (err, redirectLocation, renderProps) => {
  if (err) return console.error('BrowserEntry error', err)

  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})
