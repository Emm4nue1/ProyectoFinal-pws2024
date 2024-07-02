const localCtrl = require('../controllers/local.controller')
const express = require('express');
const router = express.Router();

router.get('/', localCtrl.getLocales);
router.post('/', localCtrl.createLocal);
router.get('/:id', localCtrl.getLocalById);
router.put('/:id', localCtrl.updateLocal);
router.delete('/:id', localCtrl.deleteLocal);

module.exports = router;

