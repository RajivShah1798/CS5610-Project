import mongoose from "mongoose";
import schema from "./schema.js";
const collectionsModel = mongoose.model("CollectionModel", schema);
export default collectionsModel;