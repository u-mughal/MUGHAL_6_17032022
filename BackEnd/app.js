const express = require('express');

//Création de l'application express
const app = express();

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
});

//Exporter l'app express pour qu'elle soit réutilisable depuis les autres fichiers
module.exports = app;



