const express = require('express');

const router = express.Router();
const controler = require('../../controllers/userControler');

router.post('/',controler.createUser);

module.exports = router;