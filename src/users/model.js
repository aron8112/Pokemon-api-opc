
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');


class User extends Model {
    id;
    name;
    gender;
    age;
    password;
    region;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    password: DataTypes.STRING,
    region: DataTypes.STRING,
    trainerId: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    paranoid: true
});

User.belongsTo(Model.Trainer, {
    foreignKey: 'id',
    target_key: 'trainerId',
});

module.exports = { User };