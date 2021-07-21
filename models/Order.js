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
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  status: {
    type: DataTypes.TINYINT,
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
    type: DataTypes.TEXT,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(16),
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: true,
  },
});

module.exports = Order;