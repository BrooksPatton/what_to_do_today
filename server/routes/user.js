const express = require('express')
const router = express.Router()

router.post('/create', (req, res, next) => {
  console.log(req.body)

  res.json({message: 'yay'})
})

module.exports = router
