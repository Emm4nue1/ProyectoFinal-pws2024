const localCtrl = require('../controllers/local.controller')

const express = require('express');
const router = express.Router();

router.get('/:id', localCtrl.getLocalById);
router.get('/', localCtrl.getLocales);
router.put('/:id', localCtrl.updateLocal);
router.post('/', localCtrl.createLocal);
router.delete('/:id', localCtrl.deleteLocal);

module.exports = router;

