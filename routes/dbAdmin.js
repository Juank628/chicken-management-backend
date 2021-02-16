const express = require("express");
const sequelize = require("../utilities/database");

const router = express.Router();

router.get("/create-tables", (req, res, next) => {
  sequelize.sync();
  res.end()
});

module.exports = router;
