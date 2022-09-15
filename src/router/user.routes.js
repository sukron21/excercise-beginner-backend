// deklare exprees
const express = require('express')
const { list, destroy, detail, insert, update, detailofname } = require('../controller/user.controller')

const router = express.Router()

router
  .get('/', list)
  .get('/user/:id', detail)
  .get('/name/:username', detailofname)
  .post('/user', insert)
  .put('/user/:id', update)
  .delete('/user/:id', destroy)

module.exports = router
