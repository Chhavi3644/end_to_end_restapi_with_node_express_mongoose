require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db/connect");
const port = process.env.port || 8080;
const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("hi i am live");
});
app.use("/api/products", products_routes);
const start = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`connect at ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
