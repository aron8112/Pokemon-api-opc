const { DataTypes } = require("sequelize/types");

class Trainer extends Model {
    id;
    team;
    pokemon;
}

Trainer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    team: DataTypes.STRING,
    pokemon: {
        type: DataTypes.ARRAY,
        default: 0
    },
}, {
    sequelize,
    modelName: 'Trainer',
    timestamps: true,
    paranoid: true
});

module.exports = { User };