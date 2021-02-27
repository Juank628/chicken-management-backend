const { DataTypes, literal } = require("sequelize");
const sequelize = require("../utilities/database");

const VariableCost = sequelize.define("VariableCost", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unitType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unitSymbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = VariableCost;
