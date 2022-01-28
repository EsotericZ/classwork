const router = require('express').Router();
const { Todo, User } = require('../../../models/Todo');

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll({
            include: [{ model: User }],
        });
        res.json(todos);
    } catch (e) {
        res.json(e);
    }
});

module.exports = router;