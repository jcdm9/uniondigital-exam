const express = require('express')
const router = express.Router()
const todoController = require('./../controllers/todo')

router.get('/', todoController.getList)
router.get('/:id', todoController.getById)
router.post('/', todoController.create)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.remove)

module.exports = router
