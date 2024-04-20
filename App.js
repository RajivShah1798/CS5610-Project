import cors from "cors";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";

mongoose.connect("mongodb+srv://admin:N0JhMFSnYzgNgvBW@cs5610-project.ybqvy1b.mongodb.net/cs5610");
const app = express();
app.use(cors());
app.use(express.json());
console.log("Hello World");
UserRoutes(app);
app.listen(4000);