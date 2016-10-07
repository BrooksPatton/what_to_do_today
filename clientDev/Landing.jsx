const React = require('react')
const Header = require('./Header')

const Landing = () => (
  <div>
    <Header />
    <div className='landing-main'>
      <div className='about-blurb'>
        <h3>An opinionated todo app that takes control</h3>
      </div>
    </div>
  </div>
)

module.exports = Landing
