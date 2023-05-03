module.exports = (app) => {
    const commandes = require('../controllers/commande.controllers.js');
    app.post('/commandes',commandes.creer);
    app.get('/commandes',commandes.afficherTout);
    app.get('/commandes/:commandeId',commandes.afficherUn);
    app.put('/commandes/:commandeId',commandes.modifier);
    app.delete('/commandes/:commandeId',commandes.supprimer)
}