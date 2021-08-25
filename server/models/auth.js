import mongoose from "mongoose";

const authSchema = mongoose.Schema({
  username: String,
  password: String,
});
const Auth = mongoose.model("auth", authSchema);

export default Auth;
