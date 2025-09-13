import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please provide the user id."],
    },

    name: {
      type: String,
      required: [true, "Please enter the name."],
    },

    email: {
      type: String,
      required: [true, "Please enter the email."],
      unique: true,
      validate: [validator.isEmail, "Please enter the valid email."],
    },

    imageUrl: {
      type: String,
      required: [true, "Please upload your profile pic."],
    },

    cartItems: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;
