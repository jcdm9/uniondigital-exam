const { Schema, model } = require('mongoose')

const toDoSchema = new Schema({
  name: { type: String },
  complete: { type: Boolean, default: false },
  completed_at: { type: Date, default: null }
}, {
  versionKey: false
})

module.exports = model('todo', toDoSchema)
