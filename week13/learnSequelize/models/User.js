const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config');

class User extends Model {
    hasPets() {
        if (this.numberOfPets > 0) {
            return true;
        }
        return false;
    }
}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            },
        },
        
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        numberOfPets: {
            type: DataTypes.INTEGER,
            default: 0,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'User',
        hooks: {
            beforeCreate: async (user, options) => {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password, salt);
                user.email = user.email.toLowerCase();
                user.password = hashedPassword;
                return user;
            },
            beforeUpdate: async (user, options) => {
                user.email = user.email.toLowerCase();
                return user;
            },
        },
    }
);

module.exports = User;