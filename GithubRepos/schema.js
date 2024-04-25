import mongoose from "mongoose";
const gitRepoSchema = new mongoose.Schema(
    {
      gitId: Number,
      name: {
        type: String,
        required: true
      },
      
    },
    { collection: "github_repos" }
  );
  export default gitRepoSchema;
  