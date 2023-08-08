const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const expenseRoute = require("./routes/expenseRoute");
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.URL}ExpenseTracker`).then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server Started at Port ${process.env.PORT}`);
  });
});

app.use(expenseRoute);

app.get("/", (req, res) => {
  res.send("Server is running...");
});
