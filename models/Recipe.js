const { DataTypes } = require("sequelize");
const sequelize = require("../utilities/database");

const Recipe = sequelize.define("Recipe", {
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
  instructions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  brief: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  family: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  eShop: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  sale: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Recipe;
