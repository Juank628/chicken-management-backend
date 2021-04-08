const express = require("express");
const Recipe = require("../models/Recipe");
const VariableCost = require("../models/VariableCost");
const RecipeCost = require("../models/RecipeCost");

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

router.put("/update", async (req, res, next) => {
  const promises = [];
  const {
    recipeData,
    recipeCosts: { costsData, costsUnitSymbol, costsQuantity },
  } = req.body;

  const { id } = recipeData;
  delete recipeData.id;

  try {
    await Recipe.update({ ...recipeData }, { where: { id } });
    await RecipeCost.destroy({ where: { RecipeId: id } });

    const updatedItem = await Recipe.findByPk(id);

    costsData.forEach((item, index) => {
      promises.push(
        updatedItem.addVariableCost(item.id, {
          through: {
            CostQuantity: costsQuantity[index],
            CostUnit: costsUnitSymbol[index],
          },
        })
      );
    });

    await Promise.all(promises);

    const data = await Recipe.findByPk(id, { include: VariableCost });

    res.json(data);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.delete("/delete", async (req, res, next) => {
  const { id } = req.body;
  try {
    await RecipeCost.destroy({ where: { RecipeId: id } });
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
