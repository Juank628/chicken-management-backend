const Sequalize = require("sequelize");
const {
  database: { dbName, dbHost, dbDialect, userName, userPass },
} = require("./secrets.json");

const sequelize = new Sequalize(dbName, userName, userPass, {
  host: dbHost,
  dialect: dbDialect,
});

module.exports = sequelize;
