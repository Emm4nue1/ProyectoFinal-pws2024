const usuarioCtrl = require ('./../controllers/usuario.controller');

const express = require('express');
const router = express.Router();

router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.createUsuario);
router.get('/:id', usuarioCtrl.getUsuario);
router.put('/:id', usuarioCtrl.updateUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);


module.exports = router;