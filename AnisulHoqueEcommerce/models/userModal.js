const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// const hash = bcrypt.hashSync(myPlaintextPassword, salt);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is Required"],
      trim: true,
      maxlength: [31, "User Length must be 31 charavters"],
      minlength: [3, "User must be 3 characters"]
    },
    email: {
      type: String,
      required: [true, "User Name is Required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (v) => {
          return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            v
          );
        },
        message: "Please Enter Correcst Email"
      }
    },
    password: {
      type: String,
      required: [true, "Passsword  is Required"],
      set: (x) => bcrypt.hashSync(x, bcrypt.genSaltSync(20))
    },
    image: {
      type: String
    },
    address: {
      type: String,
      required: [true, "Address id Required"]
    }
  },
  {
    timestamps: true
  }
);
const User = model("Users", userSchema);
module.exports = User;
