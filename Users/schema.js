/*
User Schema:
  username,
  email,
  name, 
  password,
  interests,
  userType,
  collectionsOwned,
  collectionsCollaborated,
  collectionsSaved,
  followedBy,
  followers
*/

import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    interests: [String], // Array of strings for interests
    userType: {
      type: String,
      enum: ["admin", "user", "creator"], // Assuming user types are limited to 'admin' and 'user'
      required: true,
      default: "user",
    },
    collectionsOwned: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],
    collectionsCollaborated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],
    collectionsSaved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],
    followedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { collection: "users" }
);
export default userSchema;
