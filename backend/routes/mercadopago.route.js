const express = require('express');
const router = express.Router();
const mercadopagoCtrl = require('../controllers/mercadopago.controller');

router.post('/create_preference', mercadopagoCtrl.createPreference);

module.exports = router;