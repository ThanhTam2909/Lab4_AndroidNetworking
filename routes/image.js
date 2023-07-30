var express = require('express');
var router = express.Router();

var imgCtrl = require('../controller/imagenasa.controller');

router.get('/', imgCtrl.get_image);
router.post('/', imgCtrl.add);
router.put('/', imgCtrl.update);
router.delete('/', imgCtrl.delete);
  
  module.exports = router;