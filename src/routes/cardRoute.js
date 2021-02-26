const express = require('express');

const router = express.Router();
const controler = require('../../controllers/cardControler');

router.post('/', controler.createCard);
router.get('/',controler.getCards);
router.put('/:id',controler.updateCard);
router.delete('/admin/:id', controler.deleteCard)

module.exports = router;
