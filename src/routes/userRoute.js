const express = require('express');

const router = express.Router();
const controler = require('../../controllers/userControler');

router.post('/',controler.createUser);
router.get('/',controler.getUsers);
router.get('/card/:id',controler.getCards);
router.put('/:id',controler.update);
router.delete('/admin/:id',controler.deleteUser);

module.exports = router;