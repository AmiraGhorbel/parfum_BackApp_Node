module.exports = (app) => {
    const fournisseurs = require('../controllers/fournisseur.controllers.js');
    app.post('/fournisseurs',fournisseurs.creer);
    app.get('/fournisseurs',fournisseurs.afficherTout);
    app.get('/fournisseurs/:fournisseurId',fournisseurs.afficherUn);
    app.put('/fournisseurs/:fournisseurId',fournisseurs.modifier);
    app.delete('/fournisseurs/:fournisseurId',fournisseurs.supprimer)
}