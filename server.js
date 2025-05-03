import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDb();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("API Alive");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
