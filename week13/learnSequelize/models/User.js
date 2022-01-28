const { UUIDV4, Model, DataTypes } = require('sequelize');
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
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
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
            defaultValue: 0,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'User',
        freezeTableName: true,
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