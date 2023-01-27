import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import {
  getChartDataController,
  writeToDatabase,
} from "./controllers/newsController.js";
import cors from "cors";

dotenv.config({
  path: "./config/config.env",
});
const app = express();
connectDB();
app.use(cors());

// // one time writing to db
app.get("/inputdata", (req, res, next) => {
  res.send(writeToDatabase());
});

app.get("/news/data", getChartDataController);


app.listen(process.env.PORT, () => {
  console.log("Server is working on port " + process.env.PORT);
});
