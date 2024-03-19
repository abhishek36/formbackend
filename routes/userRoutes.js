const express = require("express");
const {
  getusers,
  addUser,
  removeUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getusers);

router.post("/", addUser);

router.delete("/:id", removeUser);

module.exports = router;
