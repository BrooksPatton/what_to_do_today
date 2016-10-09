require('babel-register')

const express = require('express')
const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { match, RouterContext } = require('react-router')
const { Provider } = require('react-redux')
const { store } = require('../clientDev/redux/Store.jsx')
const _ = require('lodash')
const fs = require('fs')
const port = 5050
const baseTemplate = fs.readFileSync(path.join(__dirname, '../views/index.html'))
const template = _.template(baseTemplate)
const { Routes } = require(path.join(__dirname, '../clientDev/App.jsx'))
const Users = require('./routes/user')

const app = express()

app.use('/public', express.static(path.join(__dirname, '../client')))
app.use('/lib', express.static(path.join(__dirname, '../node_modules')))

app.get('/*', (req, res, next) => {
  match({ routes: Routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) return next(err)

    if (redirectLocation) return res.redirect(`${redirectLocation.pathname}${redirectLocation.search}`)

    if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store}, React.createElement(RouterContext, renderProps))
      )

      return res.send(template({body}))
    }

    next()
  })
})

app.use('/users', Users)

app.listen(port, () => console.log(`Listening on port ${port}`))
