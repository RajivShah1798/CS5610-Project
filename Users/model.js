import mongoose from "mongoose";
import schema from "./schema.js";
const usersModel = mongoose.model("UserModel", schema);
export default usersModel;