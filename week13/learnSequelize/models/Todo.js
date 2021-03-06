const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Todo extends Model {}

Todo.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        authorId : {
            type: DataTypes.UUID,
            references: {
                model: 'User',
                key: 'id',
            }
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'Todo',
    }
);

module.exports = Todo;