var express = require('express');
var router = express.Router();
var controller  = require('./controller');
var authValidation = require('../../middlewares/authValidation');

router.get('/get/all', [authValidation.verifyAdmin], controller.get_all);
router.get('/get/one/:id', controller.get_one);
router.get('/get-user', [authValidation.verifyToken], controller.get_by_user);
router.post('/get-results', controller.calculate_results);
router.post('/create/:username', controller.create);
router.delete('/delete/one/:id',  [authValidation.verifyToken], controller.delete_one);
router.delete('/delete/all', [authValidation.verifyAdmin], controller.delete_all);

module.exports = router;