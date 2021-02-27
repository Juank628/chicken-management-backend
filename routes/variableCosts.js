const express = require("express");
const VariableCost = require("../models/VariableCost");

const router = express.Router();

router.get("/read", async (req, res, next) => {
  try {
    const data = await VariableCost.findAll();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const newItem = await VariableCost.create(req.body);
    res.json(newItem);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
