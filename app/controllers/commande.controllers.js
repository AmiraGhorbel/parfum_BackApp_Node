const Commande = require('../models/commande.models.js'); 
const router=require("express").Router() 
const body=require("body-parser") 
router.use(body.json()); 
// Créer et sauvegarder une nouvelle commande 
exports.creer= async (req, res) => { 
    try { 
         var commande= Commande({
            dateCom :req.body.dateCom ||"Empty dateCom",
            descCom:req.body.descCom ||"Empty descCom",
            totalCom:req.body.totalCom||"Empty totalCom"
            }); 
            var result=await commande.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = (req, res) => {
    Commande.find().then(commandes => {
        res.send(commandes);
    })
    //envoyer le résultat
    .catch(err => {
    res.status(500).send({
    message: err.message || "Some error occurred while retrieving commande."
    });
    });
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Commande.findById(req.params.commandeId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Commande.findById({ _id: req.params.commandeId}).exec();
            n.dateCom = req.body.dateCom ||"Updated dateCom",
            n.descCom = req.body.descCom ||"Updated descCom",
            n.totalCom = req.body.totalCom||"Updated totalCom"
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Commande.deleteOne({_id: req.params.commandeId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
    };