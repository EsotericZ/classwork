const mongoose = require('mongoose');
const User = require('./model/User');
const Todo = require('./model/Todo');

mongoose.connect('mongodb://localhost:27017/todoMongoDB')
    .then(async () => {
        console.log('Successfully Connected to MongoDB');
        const newUser = await User.create({
            username: 'XRP FTW',
            role: 'Employee',
            powerLevel: 9001,
        });
        const newTodo = await Todo.create({
            text: 'Eat Cake',
        })
        console.log(newUser)
        console.log(newTodo)
    })
    .catch(err => console.log(err));