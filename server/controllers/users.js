const User = require("../models/User");

// get user
const getUser = async (req, res, next) => {
  const {id} = req.params;
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

// update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).send("user has been updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get myFavoritesProfiles
const getMyFavoritesProfiles = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne(id);
    let favoritesProfiles = await User.Promise.all(
      user.myFavoritesProfiles.map(async (dressID) => {
        return await Dress.findById(dressID);
      })
    );
    return res.status(200).send(dresses);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};
// get myFavoritesApartments


module.exports = { getUser, getAllUsers, updateUser };
