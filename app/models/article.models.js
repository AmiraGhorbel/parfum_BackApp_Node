const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
//Définir les champs
    desigArt : String,
    prixArt : Number,
    qteArt : String,
    descArt : String,
    marque: String,
    img: String,
    fournisseur:{type:mongoose.Schema.Types.ObjectId,
        ref:'fournisseur'

    },
}, { timestamp: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('Article', ArticleSchema);