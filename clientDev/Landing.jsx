const React = require('react')
const Header = require('./Header')
const { bool } = React.PropTypes
const { connector } = require('./redux/Store')

const Landing = React.createClass({
  propTypes: {
    signup: bool,
    showSignupForm: bool
  },

  createUser (event) {
    event.preventDefault()

    const newUser = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }

    console.log(newUser)
  },

  signupForm (isSignup) {
    if (isSignup) {
      return (
        <div className='signup-form'>
          <h2>Sign Up</h2>
          <form onSubmit={this.createUser}>
            <div>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' />
            </div>
            <div>
              <label htmlFor='email'>Email Address</label>
              <input type='email' id='email' name='email' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' />
            </div>
            <div>
              <input type='submit' value='Create account' />
            </div>
          </form>
        </div>
      )
    }
  },

  render () {
    return (
      <div>
        <Header />
        <div className='landing-main'>
          <div className='about-blurb'>
            <h3>An opinionated todo app that takes control</h3>
          </div>
          {this.signupForm(this.props.showSignupForm)}
        </div>
      </div>
    )
  }
})

module.exports = connector(Landing)
