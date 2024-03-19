const userModel = require("../model/UserModel");

const getusers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users) {
      res.status(400).json({ success: false, msg: "users not found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ success: false, msg: "something went wrong" });
  }
};

const addUser = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const newUser = await userModel.create({
      name,
      email,
      phone,
      message,
    });
    res
      .status(200)
      .json({ success: true, msg: "user created sucessfully", newUser });
  } catch (error) {
    res.status(400).json({ success: false, msg: "something went wrong" });
  }
};

const removeUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "user deleted sucessfully" });
  } catch (error) {
    res.status(400).json({ success: false, msg: "something went wrong" });
  }
};

module.exports = { getusers, addUser, removeUser };
