const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minLength: 4,
        maxLength: 8,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validator: {
            validator: function(value) {
                return isEmail(value);
            },
            message: function(userObject) {
                return `${userObject.email} is not a valid email address`;
            }
        },
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
    hobbies: [ String ],
    twoFavoriteCryptos: {
        firstFavorite: {
            type: String,
            uppercase: true,
            trim: true,
        },
        secondFavorite: {
            type: String,
            uppercase: true,
            trim: true,
        },
    }
});

const User = model('User', userSchema);

module.exports = User;