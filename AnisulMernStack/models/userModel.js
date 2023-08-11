const { Schema, model, default: mongoose } = require("mongoose");
var bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is Required"],
      trim: true,
      unique: true
      //   maxLength: [2, "User name can be max 31 Characters"],
      //   minLength: [3, "User Length must be 3 characters"]
    },
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (v) => {
          return /.+\@.+\..+/.test(v);
        },
        message: "Please Enter a Valid Email"
      }
    },
    password: {
      type: String,
      required: [true, "User Password is Required"],
      //   maxLength: [3, "User name can be max 31 Characters"],
      //   minLength: [3, "User Length must be 3 characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    address: {
      type: String,
      required: [true, "User Address is Required"]
    },
    phone: {
      type: String,
      required: [true, "User Phone is Required"]
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    isBanned: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
