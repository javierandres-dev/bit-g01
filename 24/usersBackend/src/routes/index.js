const express = require('express');
const User = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const hash = await bcryptjs.hash(req.body.password, 8);
    const newUser = User({ ...req.body, password: hash });
    newUser
      .save()
      .then((data) => res.json({ success: data }))
      .catch((err) => res.json({ failure: true }));
  } catch (error) {
    res.json({ failure: error });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.username,
    });
    if (!user) {
      res.json({ failure: 'user not found' });
    } else {
      if (await bcryptjs.compare(req.body.password, user.password)) {
        const token = jwt.sign(
          {
            name: user.name,
          },
          'privateKey',
          {
            expiresIn: '1h',
          }
        );
        res.json({ success: token });
      } else {
        res.json({ failure: 'password wrong' });
      }
    }
  } catch (error) {
    res.json({ failure: error });
  }
});

module.exports = router;
