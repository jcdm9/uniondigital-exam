const express = require('express')
const router = express.Router()
const todoController = require('./../controllers/todo')

/**
 * @swagger
 * /api/todo:
 *  get:
 *    summary: Returns list of todos
 *    responses:
 *      200:
 *        description: List of todos
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: string
 */
router.get('/', todoController.getList)

/**
 * @swagger
 * /api/todo/:id:
 *  get:
 *    summary: Returns list of todos with specified id
 *    responses:
 *      200:
 *        description: Todo with specific id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: string
 */
router.get('/:id', todoController.getById)

/**
 * @swagger
 * /api/todo:
 *  post:
 *    summary: Creates and return created todos
 *    responses:
 *      200:
 *        description: Created Todo
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: string
 */
router.post('/', todoController.create)

/**
 * @swagger
 * /api/todo:id:
 *  put:
 *    summary: Updates and return updated todo with specified id
 *    responses:
 *      200:
 *        description: Updated Todo
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: string
 */
router.put('/:id', todoController.update)

/**
 * @swagger
 * /api/todo/:id:
 *  delete:
 *    summary: Removes and return removed todo with specified id
 *    responses:
 *      200:
 *        description: Removed Todo
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: string
 */
router.delete('/:id', todoController.remove)

module.exports = router
