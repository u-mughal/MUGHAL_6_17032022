/* Import des modules necessaires */
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

/* Routage User */
router.post('/signup', function (req, res) {
    userCtrl.signup
});
router.post('/login', function (req, res) {
    userCtrl.login
});

module.exports = router;