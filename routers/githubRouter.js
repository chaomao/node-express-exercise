var router = require('express').Router();
var controller = require('../controllers/githubController.js');

router.get('/users/:username', controller.getUserInfo);

module.exports = router;
