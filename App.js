import cors from "cors";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import "dotenv/config"

mongoose.connect(process.env.DB_CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
console.log("Hello World");
UserRoutes(app);
app.listen(4000);