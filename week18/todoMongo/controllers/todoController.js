const { Todo } =require('../model');

module.exports = {
    createTodo: async (req, res) => {
        const { text, completed } = req.body;
        try {
            const newTodo = await Todo.create({
                text,
                completed,
            });
            res.json(newTodo);
        } catch (e) {
            res.json(e);
        }
    },

    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find();
            res.json(todos);
        } catch (e) {
            res.json(e);
        }
    },

    getTodoById: async (req, res) => {
        const { todoId } = req.params;
        try {
            const todo = await Todo.findById(todoId);
            res.json(todo);
        } catch (e) {
            res.json(e);
        }
    },

    updateTodoById: async (req, res) => {
        const { todoId } = req.params;
        try {
            const updatedTodo = await User.findByIdAndUpdate(
                todoId,
                {...req.body},
                {
                    new: true,
                    runValidators: true,
                }
            );
            res.json(updatedTodo);
        } catch (e) {
            res.json(e)
        }
    },

    deleteTodoById: async (req, res) => {
        const { todoId } = req.params;
        try {
            const deletedTodo = await User.findByIdAndDelete(todoId);
            res.json(deletedTodo);
        } catch (e) {
            res.json(e)
        }
    },
}