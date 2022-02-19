const Room = require("../models/Room");

// get Room
const getRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    res.status(200).send(room);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//get all Rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).send(rooms);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// update Room
const updateRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findByIdAndUpdate(id, {
      $set: req.body,
    });
    console.log(room);
    res.status(200).send("Room has been updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// add new Room

const addNewRoom = async (req, res) => {
  // const { address } = req.body;
  const { address, pictures, Description, phone, price  } = req.body;
  try{
    // const room = new Room({address});
    const room = new Room({address, pictures, Description, phone, price});
    await room.save();
  }catch (err) {
    res.status(400).send(err.message);
  }
}

module.exports = {
  getRoom,
  getAllRooms,
  updateRoom,
  addNewRoom
};