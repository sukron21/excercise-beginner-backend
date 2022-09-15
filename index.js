require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')

const a = process.env.PORT
const userRouter = require('./src/router/user.routes.js')
const recipeRouter = require('./src/router/recipe.router.js')

const app = express()

try {
  app.use(helmet({ crossOriginResourcePolicy: false }))
  app.use(xss())
  app.use(bodyParser.json())
  app.use(cors())
  app.use(recipeRouter)
  app.use(userRouter)
} catch {
  // eslint-disable-next-line no-undef
  console.error(error)
}

// jalankan express

app.listen(a, () => {
  console.log('Service running on port 3001')
})
