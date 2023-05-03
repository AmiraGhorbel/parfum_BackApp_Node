const mongoose=require("mongoose") ;
const commandeSchema=mongoose.Schema({
    dateCom : String,
    descCom : String,
    totalCom : String
   })
module.exports=mongoose.model('commande',commandeSchema);