const ToDo = require('./../models/todo')

// error messages
const ERROR_404 = 'Data not found.'
const ERROR_400 = 'Invalid parameter.'

// get all todos
const getList = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const todos = await ToDo
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const count = await ToDo.countDocuments()
    if (!todos) return res.status(404).json({ message: ERROR_404 })

    res.json({
      todos,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    })
  } catch(e) {
    console.log(`getList ERROR - ${e}`)
    next()
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const todo = await ToDo.findById(id)
    if (!todo) return res.status(404).json({ message: ERROR_404 })

    res.json(todo)
  } catch(e) {
    console.log(`getById ERROR - ${e}`)
    next()
  }
}

const create = async (req, res, next) => {
  try {
    const { name } = req.body
    if (!name) res.status(400).json({ message: ERROR_400 })

    const createdTodo = await ToDo({ name })
    createdTodo.save()

    res.json(createdTodo)
  } catch(e) {
    console.log(`create ERROR - ${e}`)
    next()
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params
    const todo = await ToDo.findById(id)
    if (!todo) return res.status(404).json({ message: ERROR_404 })

    const updatedTodo = await todo.set(req.body)
    updatedTodo.save()
    res.json(updatedTodo)
  } catch(e) {
    console.log(`update ERROR - ${e}`)
    next()
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params
    const todo = await ToDo.findOne({ _id: id })
    if (!todo) return res.status(404).json({ message: ERROR_404 })

    const deleted = await todo.remove({ _id: id })
    res.json(deleted)
  } catch(e) {
    console.log(`delete ERROR - ${e}`)
    next()
  }
}

module.exports = {
  getList,
  getById,
  create,
  update,
  remove
}
