var express = require('express');
var passport = require('passport');
var router = express.Router();

const CLIENT_URL = 'http://localhost:5173'
const PASPORT_OPTIONS = {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/fail'
}
/* GET home page. */
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', passport.authenticate("google", PASPORT_OPTIONS))

router.get("/login/fail", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
})
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/logout", (req, res) => {
  console.log(11111111111);
  req.logout();
  res.redirect(CLIENT_URL);
});
module.exports = router;
