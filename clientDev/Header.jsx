const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./redux/Store')
const { bool } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    loggedIn: bool
  },

  loggedIn (isLoggedIn) {
    let result

    if (isLoggedIn) {
      result = <div className='navbar-auth'>
        <p>Logged in</p>
      </div>
    } else {
      result = <div className='navbar-auth'>
        <Link to='/login' className='navbar-login header-link'>log in</Link>
        <Link to='/signup' className='navbar-createAccount header-link'>create account</Link>
      </div>
    }

    return result
  },

  render () {
    return (
      <header>
        <div className='container'>
          <Link to='/' className='header-link'>
            <h1 className='brand'>What to do next?</h1>
          </Link>
          {this.loggedIn(this.props.loggedIn)}
        </div>
      </header>
    )
  }
})

module.exports = connector(Header)
