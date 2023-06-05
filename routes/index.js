const express = require('express');
const userController = require('../controller/user');

const router = express.Router();
router.post('/user', userController.createUser);
router.get('/', (req, res) => {
    res.send('Hello World!')
  })
module.exports = router;