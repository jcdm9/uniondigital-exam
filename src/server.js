// libraries
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

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
app.use('/api/todo', toDoRoute)

module.exports = app
