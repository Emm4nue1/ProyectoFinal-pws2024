const propietarioCtrl = require ('./../controllers/propietario.controller');

const express = require('express');
const router = express.Router();

router.get('/', propietarioCtrl.getPropietarios);
router.post('/', propietarioCtrl.createPropietario);
router.get('/:id', propietarioCtrl.getPropietario);
router.put('/:id', propietarioCtrl.updatePropietario);
router.delete('/:id', propietarioCtrl.deletePropietario);


module.exports = router;