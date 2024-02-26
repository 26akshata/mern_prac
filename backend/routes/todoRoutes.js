const express = require('express')
const router = express.Router()
const { createTodo, readTodo, oneReadTodo, twoReadTodo, updateReadTodo, completeTodo, searchTitle } = require('../controllers/todoController')

router.post('/create-todo',createTodo)
router.get('/read-todo',readTodo)
router.get('/one-read-todo/:id',oneReadTodo)
router.get('/two-read-todo/:id',twoReadTodo)
router.put('/update-read-todo/:id',updateReadTodo)
router.get('/complete-todo/:abc',completeTodo )
router.get('/get-todo-by-title/:title',searchTitle)
module.exports = router