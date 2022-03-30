/* Import des modules necessaires */
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sauceCtrl = require("../controllers/sauce");

/* Routage Sauce */
router.post("/", auth, multer, sauceCtrl.createSauce);


module.exports = router;