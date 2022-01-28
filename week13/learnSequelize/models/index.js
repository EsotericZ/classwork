const User = require('./User');
const Todo = require('./Todo');

User.hasMany(Todo, {
    foreignKey: 'authorId',
    onDelete: 'CASCADE',
});

Todo.belongsTo(User, {
    foreignKey: 'authorId',
});

module.exports = {
    User,
    Todo,
};