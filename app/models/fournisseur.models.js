const mongoose=require("mongoose") ;
const fournisseurSchema=mongoose.Schema({
    nomFour : String,
    descFour : String,
    telFour : String,
    emailFour : String,
    adresseFour : String
})
module.exports=mongoose.model('fournisseur',fournisseurSchema);