const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/users', async (req, res) => {
  try {
    const { name, phoneNumber, email } = req.body;
    const user = await User.create({ name, phoneNumber, email });
    res.json(user);
  } catch (error) {
    console.error(error);
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByPk(userId).then((user) => user.destroy());
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
