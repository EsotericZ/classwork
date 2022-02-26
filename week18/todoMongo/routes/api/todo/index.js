const router = require('express').Router();
const { createTodo, getAllTodos, getTodoById, updateTodoById, deleteTodoById } = require('../../../controllers/todoController');

router.route('/')
    .post(createTodo)
    .get(getAllTodos);

router.route('/:todoId')
    .get(getTodoById)
    .put(updateTodoById)
    .delete(deleteTodoById);

module.exports = router;