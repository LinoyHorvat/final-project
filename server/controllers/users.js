const User = require("../models/User");

// get user
const getUser = async (req, res, next) => {
  const { id } = req.params;
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
    const user = await User.findById(id);
    console.log(user);
    let favoritesProfiles = await user.myFavoritesProfiles.map(
      async (userID) => {
        return await User.findById(userID);
      }
    );
    return res.status(200).send(favoritesProfiles);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

// add user to myFavoritesProfiles
const addToMyFavoritesProfiles = async (req, res) => {
  const { id } = req.params;
  const profileId = req.body._id;
  if (profileId === id)
    return res.status(400).send({ message: "Can't add yourself to favorites" });
  try {
    const user = await User.findById(id);
    const existProfile = user.myFavoritesProfiles.find(
      (userID) => userID === profileId
    );
    if (!existProfile) {
      user.myFavoritesProfiles.push(profileId);
      await user.save();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// delete user from myFavoritesProfiles
const deleteFromMyFavoritesProfiles = async (req, res) => {
  const { id } = req.params;
  const profileId = req.body._id;
  try {
    const user = await User.findById(id);
    user.myFavoritesProfiles.filter((userID) => userID != profileId);
    let idx = user.myFavoritesProfiles.indexOf(profileId);
    if (idx !== -1) user.myFavoritesProfiles.splice(idx, 1);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get myFavoritesApartments
const getMyFavoritesApartments = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    console.log(user);
    let favoritesProfiles = await user.myFavoritesApartments.map(
      async (roomID) => {
        return await User.findById(roomID);
      }
    );
    return res.status(200).send(favoritesApartments);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

// add room to myFavoritesApartments
const addToMyFavoritesApartments = async (req, res) => {
  const { id } = req.params;
  const newRoomId = req.body._id;
  try {
    const user = await User.findById(id);
    const existProfile = user.myFavoritesApartments.find(
      (roomID) => roomID === newRoomId
    );
    if (!existProfile) {
      user.myFavoritesApartments.push(newRoomId);
      await user.save();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// delete user from myFavoritesApartments
const deleteFromMyFavoritesApartments = async (req, res) => {
  const { id } = req.params;
  const newRoomId = req.body._id;
  try {
    const user = await User.findById(id);
    user.myFavoritesApartments.filter((roomID) => roomID != newRoomId);
    let idx = user.myFavoritesApartments.indexOf(newRoomId);
    if (idx !== -1) user.myFavoritesApartments.splice(idx, 1);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getUser,
  getAllUsers,
  updateUser,
  getMyFavoritesProfiles,
  addToMyFavoritesProfiles,
  deleteFromMyFavoritesProfiles,
  getMyFavoritesApartments,
  addToMyFavoritesApartments,
  deleteFromMyFavoritesApartments,
};
