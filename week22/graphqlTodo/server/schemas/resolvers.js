const { Todo, User } = require('../models');
const utils = require('../utils');

const resolvers = {
    Query: {
        user: async (_root, { id }) => {
            return await User.findById(id);
        },
        users: async () => {
            return await User.find({});
        },
        todo: async (_root, { id }) => {
            return await Todo.findById(id);
        },
        todos: async () => {
            return await Todo.find({});
        },
    },

    Mutation: {
        createUser: async (_root, { firstName, lastName, email, password }) => {
            const user = await User.create({
                firstName,
                lastName,
                email,
                password,
            });
            const token = utils.signToken(user.firstName, user._id);
            return { token, user };
        },
        createTodo: async (_root, {task, userId, completed}) => {
            return await Todo.create({
                task,
                userId,
                completed,
            });
        },
    },

    User: {
        fullName: (root) => {
            return `${root.firstName} ${root.lastName}`;
        },
        nameLength: (root) => {
            return root.firstName.length;
        },
        todos: async (root) => {
            return await Todo.find({
                userId: root._id,
            });
        },
    },

    Todo: {
        user: async (root) => {
            return await User.findById(root.userId);
        }
    },
};

module.exports = resolvers;