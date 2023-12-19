const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");

router.post("/users", async (req, res) => {
  try {
    const { id, name, phoneNumber, email } = req.body;
    const user = await User.create({ id, name, phoneNumber, email });
    res.json(user);
  } catch (error) {
    console.error(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});
router.put("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, phoneNumber, email } = req.body;
    const existingUser = await User.findByPk(userId);
    if (existingUser) {
      await existingUser.update({ name, phoneNumber, email });
      res.json(existingUser);
    } else {
      res.json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await User.findByPk(userId);
    res.json(response);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByPk(userId).then((user) => user.destroy());
    res.json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
