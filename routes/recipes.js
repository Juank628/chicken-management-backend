const express = require("express");
const Recipe = require("../models/Recipe");
const VariableCost = require("../models/VariableCost");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const promises = [];
    const {
      recipeData,
      recipeCosts: { costsData, costsUnitSymbol, costsQuantity },
    } = req.body;

    const newItem = await Recipe.create(recipeData);
    
    costsData.forEach((item, index) => {
      promises.push(
        newItem.addVariableCost(item.id, {
          through: {
            CostQuantity: costsQuantity[index],
            CostUnit: costsUnitSymbol[index],
          },
        })
      );
    });

    await Promise.all(promises);

    res.json(newItem);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get("/read", async (req, res, next) => {
  try {
    const data = await Recipe.findAll({ include: VariableCost });
    res.json(data);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.post("/update", async (req, res, next) => {
  const { id, description, ingredients, instructions, family } = req.body;
  try {
    const [numberOfAffectedRows, affectedRows] = await Recipe.update(
      { description, ingredients, instructions, family },
      { where: { id } }
    );
    const data = await Recipe.findByPk(id);
    res.json(data);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.delete("/delete", async (req, res, next) => {
  const { id } = req.body;
  try {
    const result = await Recipe.destroy({
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
