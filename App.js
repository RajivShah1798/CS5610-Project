import cors from "cors";
//import session from "express-session";
import cookieSession from "cookie-session";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import CollectionRoutes from "./UserCollections/routes.js";
import "dotenv/config"
import gitRoutes from "./GithubRepos/routes.js";

mongoose.connect(process.env.DB_CONNECTION_STRING);
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }
 ));
// const sessionOptions = {
//     secret: process.env.SECRET_SESSION_KEY,
//     resave: false,
//     saveUninitialized: false
// };
// if (process.env.NODE_ENV !== "development") {
//     sessionOptions.proxy = true;
//     sessionOptions.cookie = {
//       sameSite: "none",
//       secure: true,
//       domain: process.env.HTTP_SERVER_DOMAIN,
//     };
//   }
  
// app.use(session(sessionOptions));

app.use(
    cookieSession({
      name: "session",
      keys: [process.env.SECRET_SESSION_KEY],
      // Set additional options based on your requirements
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      // Configure cookie options based on your requirements
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    })
  );

app.use(express.json());
console.log("Hello World");
UserRoutes(app);
CollectionRoutes(app);
gitRoutes(app);
app.listen(4000);