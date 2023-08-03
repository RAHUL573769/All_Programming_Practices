const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

class UserController {
  static userRegistration = async (req, res) => {
    const { name, password, email, passwordConfirmation, tc } = req.body;
console.log(req);
    const user = await UserModel.findOne({ email: email });

    if (user) {
      res.send({ status: "failed", message: "Email Already Exists" });
    } else {
      if (name && password && passwordConfirmation && tc) {
        if (password === passwordConfirmation) {
          try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hashPassword = await bcrypt.hash(password, salt);
            const doc = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
              tc: tc
            });
            await doc.save();

            const saved_user=await UserModel.findOne({email:email});

            //gENERATE jWT
            const token=jwt.sign({user_id:saved_user._id},process.env.JWT_SECRET_KET,{expiresIn:"10d"});
            res.send({"status":"Data Added","token":token});
          } catch (error) {
            console.log(error);
          }
        } else {
          res.send({
            status: "failed",
            message: "Password And Confirm Pasword not matched"
          });
        }
      } else {
        res.send({ status: "failed", message: "All Fieds Are Mandatory" });
      }
    }
  };

  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      if (email && password) {
        const user = await UserModel.findOne({ email: email });

        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);

          if (isMatch && user.email === email) {
            res.send("Login is Succesfull");
          } else {
            res.send({
              status: "failed",
              message: "Email or Password Not Match"
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not a verifies user"
          });
        }
      } else {
        res.send({ status: "failed", message: "All Fieds Are Mandatory" });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = UserController;
