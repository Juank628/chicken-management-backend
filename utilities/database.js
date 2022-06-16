const Sequalize = require("sequelize");
const {
  database: { dbName, dbHost, dbPort, dbDialect, userName, userPass },
} = require("./secrets.json");

const sequelize = new Sequalize(dbName, userName, userPass, {
  host: dbHost,
  dialect: dbDialect,
  port: dbPort
});

module.exports = sequelize;
