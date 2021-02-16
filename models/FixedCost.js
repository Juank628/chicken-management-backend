const { DataTypes, literal } = require("sequelize");
const sequelize = require("../utilities/database");

const FixedCost = sequelize.define("FixedCost", {
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
  createdAt: {
    type: DataTypes.DATE(3),
    defaultValue: literal("CURRENT_TIMESTAMP(3)"),
  },
  updatedAt: {
    type: DataTypes.DATE(3),
    defaultValue: literal(
      "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
    ),
  },
});

module.exports = FixedCost;
