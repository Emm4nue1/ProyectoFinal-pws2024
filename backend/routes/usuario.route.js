const usuarioCtrl = require ('./../controllers/usuario.controller');
const express = require('express');
const router = express.Router();

router.get('/:id', usuarioCtrl.getUsuario);
router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.createUsuario);
router.put('/:id', usuarioCtrl.updateUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);

module.exports = router;