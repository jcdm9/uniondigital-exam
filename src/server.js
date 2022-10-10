// libraries
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const app = express()

// swagger https://swagger.io/specification/#infoObject
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TODO List API',
      description: 'Back-end examination',
    },
    servers: [{ url: `${process.env.URL}:${process.env.PORT}` }],
  },
  apis: ["./src/routes/*.js"],
}

const specs = swaggerJsDoc(options)

// routes
const toDoRoute = require('./routes/todo')

// db
const db = require('./db')
db.InitiateMongoServer()

// config
app.use(cors())
app.use(bodyParser.json())

// api
app.get('/', (req, res) => {
  res.send('Welcome to TODO List API!')
})
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use('/api/todo', toDoRoute)

module.exports = app
