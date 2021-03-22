const { DataTypes } = require("sequelize");
const sequelize = require("../utilities/database");
const VariableCost = require("./VariableCost");
const Recipe = require("./Recipe");

const RecipeCost = sequelize.define("RecipeCost", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  RecipeId: {
    type: DataTypes.INTEGER,
    //allowNull: false,
    references: {
      model: Recipe,
      key: "id",
    },
  },
  VariableCostId: {
    type: DataTypes.INTEGER,
    //allowNull: false,
    references: {
      model: VariableCost,
      key: "id",
    },
  },
  CostUnit: {
    type: DataTypes.STRING,
    //allowNull: false,
  },
  CostQuantity: {
    type: DataTypes.FLOAT,
    //allowNull: false,
  },
});

module.exports = RecipeCost;
