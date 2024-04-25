import mongoose from "mongoose";
const gitRepoSchema = new mongoose.Schema(
    {
      gitId: Number,
      name: {
        type: String,
        required: true
      },
      ownerName: {
        type: String,
        required: true
      },
      htmlURL: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      language: String,
    //   collections: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Collection",
    //     }
    //   ],
      topics: [String],
      stargazerCount: Number,
      watcherCount: Number,
      forksCount: Number,
      createdAt: String

    },
    { collection: "github_repos" }
  );
  export default gitRepoSchema;
  