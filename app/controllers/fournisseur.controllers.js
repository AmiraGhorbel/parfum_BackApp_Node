const Fournisseur = require('../models/fournisseur.models.js'); 
const router=require("express").Router() 
const body=require("body-parser") 
router.use(body.json()); 
// Créer et sauvegarder une nouvelle Article 
exports.creer= async (req, res) => { 
    try { 
         var fournisseur= Fournisseur({
            nomFour : req.body.nomFour ||"Untitled",
            descFour : req.body.descFour ||"Empty descFour",
            telFour : req.body.telFour ||"Empty telFour",
            emailFour : req.body.emailFour ||"Empty emailFour",
            adresseFour : req.body.adresseFour ||"Empty adresseFour"
             }); 
            var result=await fournisseur.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = (req, res) => {
    Fournisseur.find().then(fournisseurs => {
        res.send(fournisseurs);
    })
    //envoyer le résultat
    .catch(err => {
    res.status(500).send({
    message: err.message || "Some error occurred while retrieving Fournisseurs."
    });
    });
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Fournisseur.findById(req.params.fournisseurId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Fournisseur.findById({ _id: req.params.fournisseurId}).exec();
            n.nomFour = req.body.nomFour ||"Updated nomFour",
            n.descFour = req.body.descFour ||"Updated descFour",
            n.telFour = req.body.telFour ||"Updated telFour",
            n.emailFour = req.body.emailFour ||"Updated emailFour",
            n.adresseFour = req.body.adresseFour ||"Updated adresseFour"     
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Fournisseur.deleteOne({_id: req.params.fournisseurId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
    };