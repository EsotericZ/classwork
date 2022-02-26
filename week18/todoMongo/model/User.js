const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minLength: 4,
        maxLength: 8,
    },
    role: {
        type: String,
        enum: ['Admin', 'Employee', 'Manager'],
    },
    powerLevel: {
        type: Number,
        min: 1,
        max: 100000000,
    },
});

const User = model('User', userSchema);

module.exports = User;