const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Book extends Model {}

Book.init(
    {
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        isbn: {
            type: DataTypes.STRING,
        },
        pages: {
            type: DataTypes.INTEGER,
        },
        edition: { 
            type: DataTypes.INTEGER,
        },
        isPaperback: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'book',
    }
);

module.exports = Book;