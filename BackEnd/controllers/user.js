/* Import des modules necessaires */
const User = require("../models/user");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config({ encoding: "latin1" });

/* Controleur inscription */
exports.signup = (req, res, next) => {
    bcrypt
        .hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUND))
        .then((hash) => {
            const user = new User({
                email: req.body.email,
                password: hash,
            });

            user
                .save()
                .then(() => res.status(201).json({ message: " Utilisateur Crée !" }))
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));

};