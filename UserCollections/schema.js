import mongoose from "mongoose";

const collectionsSchema = new mongoose.Schema({
    collectionName: {
      type: String,
      required: true
    },
    collectionTags: [String], // Array of strings for tags
    collectionType: {
      type: String,
      enum: ['Private', 'Public'],
      required: true
    },
    githubRepos: [String], // Array of strings for Github repo IDs
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    collaborators: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    savedBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {collection: "user_collections" });
export default collectionsSchema;