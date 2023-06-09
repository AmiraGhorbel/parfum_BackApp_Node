const express = require('express');
const bodyParser = require('body-parser');
// créer application express
const app = express();
const cors=require('cors');
// parser les requêtes de type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parsee les requêtes de type - application/json
app.use(bodyParser.json())
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
    next();
  });
// Configurer la base deonnées
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
/* Si on veut utiliser mongoose dans différents 
 emplacements il doit être vu
en mode global : */
mongoose.Promise = global.Promise;
// Connexion à la base données
mongoose.connect(dbConfig.url,{
 useNewUrlParser: true,
 useUnifiedTopology: true
 }).then(() => {
 console.log("Successfully connected to the database");
}).catch(err => {
 console.log('Could not connect to the database. Exiting now...', err);
 process.exit();
});
// définir une route
app.get('/', (req, res) => {
 res.json({"message": "Welcome"});
});
require('./app/routes/article.routes.js')(app);
require('./app/routes/fournisseur.routes.js')(app);
require('./app/routes/commande.routes.js')(app);
require('./app/routes/user.routes.js')(app);
// Ecoute des requêtes
app.listen(3004, () => {
 console.log("Server is listening on port 3004"); });