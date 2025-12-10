const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

mongoose
  .connect("mongodb://127.0.0.1:27017/bookDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/books", bookRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));