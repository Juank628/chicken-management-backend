const express = require("express");
const VariableCost = require("../models/VariableCost");
const RecipeCost = require("../models/RecipeCost");

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
  const recipesWithCost = await findVariableCostInRecipes(id);
  if (recipesWithCost.length == 0) {
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
  } else {
    res.status(409)
    res.json(
      {
        currently_used: true,
        recipes: recipesWithCost
      }
    )
  }
});

const findVariableCostInRecipes = async (costId) => {
  try {
    const foundRecipesIds = [];
    const foundRecipes = await RecipeCost.findAll({
      where: { VariableCostId: costId },
    });
    foundRecipes.forEach((recipe) => {
      foundRecipesIds.push(recipe.RecipeId);
    });
    return foundRecipesIds;
  } catch (err) {
    return err;
  }
};

module.exports = router;
