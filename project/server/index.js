import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import EmailRoute from "./route/email.route.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);

app.use("/api/emails", EmailRoute);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("mongoDB connexion");
  } catch (error) {
    throw error;
  }
};
app.listen(process.env.PORT, () => {
  connect();
  console.log("connected to backend.. on port  ");
});
