const express = require("express");
const Expense = require("../models/expenseModel");
const router = express.Router();

router.post("/expenses", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const addExpense = await Expense.create(data);
    console.log(data);
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    // console.log(error);
  }
});

router.get("/expenses", async (req, res) => {
  try {
    const getAllExpenses = await Expense.find();
    res.status(200).json(getAllExpenses);
  } catch (error) {
    res.status(500).json("Somthing went Wrong");
  }
});

module.exports = router;
