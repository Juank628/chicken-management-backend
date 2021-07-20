const { DataTypes } = require("sequelize");
const sequelize = require("../utilities/database");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  table: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recipesDesc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recipesQuantities: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recipesPrices: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recipesCosts: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Order;