const promocionCtrl = require('../controllers/promocion.controller');
const express = require('express');
const router = express.Router();

router.post('/', promocionCtrl.createPromocion);
router.get('/', promocionCtrl.getPromociones);
router.get('/:id', promocionCtrl.getPromocionById);
router.put('/:id', promocionCtrl.updatePromocion);
router.delete('/:id', promocionCtrl.deletePromocion);

module.exports = router;