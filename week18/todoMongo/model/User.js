const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        trim: true,
        // minLength: 4,
        // maxLength: 8,
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
    // powerLevel: {
    //     type: Number,
    //     min: 1,
    //     max: 100000000,
    // },
    // hobbies: [ String ],
    // twoFavoriteCryptos: {
    //     firstFavorite: {
    //         type: String,
    //         uppercase: true,
    //         trim: true,
    //     },
    //     secondFavorite: {
    //         type: String,
    //         uppercase: true,
    //         trim: true,
    //     },
    // }
});

// Virtual
userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.virtual('fullName').set(function(currentValueBeingSet, theObjectWeCallSetOn, documentBeingSaved) {
    console.log(currentValueBeingSet, 60)
    console.log(theObjectWeCallSetOn, 61)
    console.log(documentBeingSaved, 62)
})

// Model Methods
userSchema.statics.findByRole = async function(role) {
    return await this.find({ role });
};

// Instance Methods
userSchema.methods.greeting = function() {
    console.log(`Hi, my username is ${this.username}. My role is ${this.role}`);
}

const User = model('User', userSchema);

module.exports = User;