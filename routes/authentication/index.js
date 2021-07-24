const router = require('express').Router();

router.use('/signup', require('./signup'));
router.use('/login', require('./login'));

module.exports = router;
