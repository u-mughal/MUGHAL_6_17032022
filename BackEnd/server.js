const http = require('http');

//Importation de l'app express
const app = require('./app');

//On set l'appli sur le port souhaité
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);


server.listen(process.env.PORT || 3000);