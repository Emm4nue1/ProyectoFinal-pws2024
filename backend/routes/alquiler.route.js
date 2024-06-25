const alquilerCtrl = require('../controllers/alquiler.controller')

const express = require('express');
const router = express.Router();

router.get('/', alquilerCtrl.getAlquileres);
router.post('/', alquilerCtrl.createAlquiler);
router.get('/:id', alquilerCtrl.getAlquilerById);
router.put('/:id', alquilerCtrl.updateAlquiler);
router.delete('/:id', alquilerCtrl.deleteAlquiler);

module.exports = router;