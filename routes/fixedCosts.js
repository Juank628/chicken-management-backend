const express = require("express");
const FixedCost = require("../models/FixedCost");

const router = express.Router();

router.get("/get-all", async (req, res, next) => {
  try {
    const data = await FixedCost.findAll();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json(err);
  }
});

module.exports = router;
