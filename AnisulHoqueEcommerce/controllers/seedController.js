const data = require("../data");
const User = require("../models/userModal");
const seedUser = async (req, res) => {
  try {
    //insrting
    const users = await User.insertMany(data.users);

    //deleting
    // await User.deleteMany({});
    return res.status(200).json(users);
    console.log("Dta Added");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { seedUser };
