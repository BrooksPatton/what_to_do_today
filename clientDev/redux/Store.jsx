const redux = require('redux')
const reactRedux = require('react-redux')

const SET_LOGGED_IN = 'setLoggedIn'

const initialState = {
  loggedIn: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return reduceLoggedIn(state, action)
    default:
      return state
  }
}

function reduceLoggedIn (state, action) {
  const newState = {}
  Object.assign(newState, state, {loggedIn: action.value})
  return newState
}

const store = redux.createStore(rootReducer)
// const store = redux.createStore(rootReducer, initialState, redux.compose(
//   typeof window === 'object' && typeof window.devToolsExtension !== undefined ? window.devToolsExtension() : (f) => f
// ))

function mapStateToProps (state) {
  return {
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setLoggedIn (bool) {
      dispatch({type: SET_LOGGED_IN, value: bool})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
