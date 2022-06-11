const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});