const express = require("express");
const cors = require("cors");
const middleware = require("./middleware");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.use(middleware.decodeToken);

app.get("/api/todos", (req, res) => {
  return res.json([
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
    { id: 3, title: "Todo 3" },
  ]);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
