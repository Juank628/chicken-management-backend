const Sequalize = require("sequelize");
const { dbName, dbHost, dbDialect, userName, userPass } = require("./secrets");

const sequelize = new Sequalize(dbName, userName, userPass, {
  host: dbHost,
  dialect: dbDialect,
});

module.exports = sequelize;
