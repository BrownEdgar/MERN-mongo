var express = require('express');
var passport = require('passport');
var router = express.Router();
const PASPORT_OPTIONS = {
	successRedirect: 'http://localhost:5173/',
	failureRedirect: '/login/fail'
}
/* GET home page. */
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', passport.authenticate("google", PASPORT_OPTIONS))
module.exports = router;
