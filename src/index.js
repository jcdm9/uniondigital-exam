require('dotenv').config()
const server = require('./server')

// env
const { URL, PORT } = process.env

server.listen(PORT, () => {
  console.log(`TODO List API is running at ${URL}:${PORT}`)
})

module.exports = server
