import mongoose from "mongoose";

const collectionSchema = new Schema({
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
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    collaborators: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    views: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {collection: "user_collections" });
export default collectionsSchema;