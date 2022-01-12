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
  percent: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  recipesIDs: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recipesDescs: {
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
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalProfit: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
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
