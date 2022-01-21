const express = require('express');
const connection = require('./config');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/api/users', async (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'You must provide a username' });
    }
    try {
        const createUserQuery = "INSERT INTO users (username) VALUES (?);";
        const getUserByIdQuery = "SELECT * FROM users WHERE id = ?;";
        const [result] = await connection.query(createUserQuery, [username]);
        const [userResult] = await connection.query(getUserByIdQuery, [result.insertId]);
        res.json(userResult[0]);
    } catch (e) {
        res.status(400).json(e);
    }
})

app.get('/api/users', async (req, res) => {
    try {
        const getAllUsersQuery = 'SELECT * FROM users;';
        const [ users ] = await connection.query(getAllUsersQuery);
        res.json(users);
    } catch (e) {
        res.status(400).json(e);
    }
})

app.get('/api/todos', async (req, res) => {
    try {
        const getAllTodosQuery = 'SELECT todos.id, task, completed, userId, users.username FROM todos LEFT JOIN users ON todos.userId = users.id;';
        const [ todos ] = await connection.query(getAllTodosQuery);
        res.json(todos);
    } catch (e) {
        res.status(400).json(e);
    }
})

app.post('/api/todos', async (req, res) => {
    const { task, userId } = req.body;
    if (!task) {
        return res.status(400).json({error: 'You must provide a task'});
    }
    try {
        const insertQuery = 'INSERT INTO todos (task, userId) VALUES (?,?);';
        const getTodoById = 'SELECT * FROM todos INNER JOIN users ON todos.userId = ? WHERE todos.id = ?;';
        const [result] = await connection.query(insertQuery, [task, userId]);
        const [todosResult] = await connection.query(getTodoById, [userId, result.insertId]);
        res.json(todosResult[0]);
    } catch (e) {
        res.status(400).json(e);
    }
})

app.patch('/api/todos/:todoId', async (req, res) => {
    const { todoId } = req.params;
    const { task, completed } = req.body;
    if (!task || !completed) {
        return res.status(400).json({ error: 'You must provide the task and completed'});
    }
    try {
        const updateTodoById = 'UPDATE todos SET task = ?, completed = ? WHERE id = ?;';
        const getTodoById = 'SELECT * FROM todos WHERE id = ?;';
        const isCompleted = completed === 'true' ? 1 : 0;
        await connection.query(updateTodoById, [task, isCompleted, todoId]);
        const [todos] = await connection.query(getTodoById, todoId);
        res.json(todos[0]);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.delete('/api/todos/:todoId', async (req, res) => {
    const { todoId } = req.params;
    try {
        const getTodoById = 'SELECT * FROM todos WHERE id = ?;';
        const deleteTodoById = 'DELETE FROM todos WHERE id = ?;';
        const [todos] = await connection.query(getTodoById, todoId);
        if (!todos[0]) {
            return res.status(404).json({ error: 'Todo not found'})
        }
        await connection.query(deleteTodoById, todoId);
        res.json(todos[0]);
    } catch(e) {
        res.status(400).json(e);
    }
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));