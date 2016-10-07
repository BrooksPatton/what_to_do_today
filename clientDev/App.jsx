const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const { Router, Route, hashHistory } = require('react-router')
const { Provider } = require('react-redux')
const { store } = require('./redux/Store')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Landing} />
        </Router>
      </Provider>
    )
  }
})
ReactDOM.render(<App />, document.getElementById('app'))
