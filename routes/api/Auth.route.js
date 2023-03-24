
const router = require("express").Router();

// importing controllers
const signup = require("../../controller/Auth/signup")
const login = require("../../controller/Auth/login")

router.post('/signup',signup);
router.post('/login',login);

module.exports = router;
