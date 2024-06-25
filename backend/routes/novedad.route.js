const novedadCtrl = require('./../controllers/novedad.controller');

const express = require('express');
const router = express.Router();

router.get('/', novedadCtrl.getNovedades);
router.post('/', novedadCtrl.createNovedad);
router.get('/:id', novedadCtrl.getNovedad);
router.put('/:id', novedadCtrl.updateNovedad);
router.delete('/:id', novedadCtrl.deleteNovedad);

module.exports = router;