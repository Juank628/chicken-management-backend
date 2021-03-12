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
  ingredients: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      return this.getDataValue("ingredients").split(",");
    },
    set(val) {
      //this.setDataValue("ingredients", val.join(";"));
      this.setDataValue("ingredients", val);
    },
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  family: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Recipe;
