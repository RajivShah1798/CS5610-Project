import mongoose from "mongoose";
import schema from "./schema.js";
const gitRepoModel = mongoose.model("GitRepoModel", schema);
export default gitRepoModel;