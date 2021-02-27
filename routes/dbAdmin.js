const express = require("express");
const sequelize = require("../utilities/database");

const router = express.Router();

router.get("/create-tables", (req, res, next) => {
  try {
    sequelize.sync();
    res.end();
  } catch (err) {
    res.end(err);
  }
});

module.exports = router;
