const express = require("express");
const VariableCost = require("../models/VariableCost");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const newItem = await VariableCost.create(req.body);
    res.json(newItem);
  } catch (err) {
    res.json(err);
  }
});

router.get("/read", async (req, res, next) => {
  try {
    const data = await VariableCost.findAll();
    res.json(data);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.post("/update", async (req, res, next) => {
  const { id, description, unitType, unitSymbol, cost } = req.body;
  try {
    const [numberOfAffectedRows, affectedRows] = await VariableCost.update(
      { description, unitType, unitSymbol, cost },
      { where: { id } }
    );
    const data = await VariableCost.findByPk(id);
    res.json(data);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.delete("/delete", async (req, res, next) => {
  const { id } = req.body;
  try {
    const result = await VariableCost.destroy({
      where: { id },
      force: true,
    });
    res.json(result);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

module.exports = router;
