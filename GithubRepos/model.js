import mongoose from "mongoose";
import schema from "./schema.js";
const GitRepoModel = mongoose.model("GitRepoModel", schema);
export default GitRepoModel;