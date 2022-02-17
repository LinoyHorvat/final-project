const User = require("../models/User");

// get user
const getUser = async (req, res, next) => {
  const id = req.params;
  try {
    const user = await User.findById(id);
    const { password, ...reset } = user._doc;
    res.status(200).send(reset);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getUser, getAllUsers };
