const redux = require('redux')
const reactRedux = require('react-redux')

const SET_LOGGED_IN = 'setLoggedIn'
const SET_SHOW_SIGNUP_FORM = 'setSignupForm'

const initialState = {
  loggedIn: false,
  showSignupForm: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return reduceLoggedIn(state, action)
    case SET_SHOW_SIGNUP_FORM:
      return reduceShowSignupForm(state, action)
    default:
      return state
  }
}

function reduceLoggedIn (state, action) {
  const newState = {}
  Object.assign(newState, state, {loggedIn: action.value})
  return newState
}

function reduceShowSignupForm (state, action) {
  const newState = {}
  Object.assign(newState, state, {showSignupForm: action.value})
  return newState
}

function mapStateToProps (state) {
  return {
    loggedIn: state.loggedIn,
    showSignupForm: state.showSignupForm
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setLoggedIn (bool) {
      dispatch({type: SET_LOGGED_IN, value: bool})
    },

    setSignupForm (bool) {
      dispatch({type: SET_SHOW_SIGNUP_FORM, value: bool})
    }
  }
}

const store = redux.createStore(rootReducer)

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
