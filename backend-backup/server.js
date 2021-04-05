import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";

dotenv.config();

const mongodbURL = config.MONGODB_URL;
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();

app.listen(5000, () => {
  console.log(`Server started at http://localhost:5000`);
});
