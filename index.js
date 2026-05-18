import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({
    "name" : "Islam",
    "age" : 25
  })
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/health`);
});
