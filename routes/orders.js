const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  const orderData = req.body;
  try {
    const newOrder = await Order.create(orderData);
    res.json(newOrder);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json(err);
  }
});

router.get("/read", async (req, res, next) => {
  try {
    const data = await Order.findAll();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json(err);
  }
});

module.exports = router;
