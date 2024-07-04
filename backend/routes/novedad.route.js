const novedadCtrl = require('../controllers/novedad.controller');
const express = require('express');
const router = express.Router();

router.post('/', novedadCtrl.createNovedad);
router.get('/', novedadCtrl.getNovedades);
router.get('/:id', novedadCtrl.getNovedadById);
router.put('/:id', novedadCtrl.updateNovedad);
router.delete('/:id', novedadCtrl.deleteNovedad);

module.exports = router;