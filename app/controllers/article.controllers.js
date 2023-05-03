const Article = require('../models/article.models.js'); 
const router=require("express").Router() 
const body=require("body-parser") 
const Fournisseur=require('../models/fournisseur.models.js');
/*const multer = require('multer')

//define storage for the images

const storage = multer.diskStorage({
    destination:function(request,file,callback){
        callback(null,'./app/uploads/images');
    },

//add back the extension
filename:function(request,file,callback){
    callback(null,Date.now() + File.originalname)
},
});
//upload parameters for multer
const upload = multer({
    storage:storage,
    limits:{
        fieldSize: 1024 * 1024 * 3,
    },
});*/
router.use(body.json()); 
// Créer et sauvegarder une nouvelle Article 
exports.creer= async (req, res) => { 
    try {
         var article= Article(req.body);
         
            var result=await article.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = async(req, res) => {
    try{
        var result = await Article.find().populate('fournisseur','fournisseur.nomFour fournisseur.descFour fournisseur.telFour fournisseur.emailFour fournisseur.adresseFour');
        res.send(result);
    }
    catch(error) {
        res.status(500).send(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Article.findById(req.params.articleId).populate('fournisseur').exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Article.findById({ _id: req.params.articleId});
            n.desigArt = req.body.desigArt || "Updated desigArt" ;   
            n.prixArt = req.body.prixArt || "Updated prixArt" ;
            n.qteArt = req.body.qteArt  || "Updated qteArt" ;
            n.descArt = req.body.descArt || "Updated descArt" ;
            n.marque = req.body.marque || "Updated marque";
            n.img=req.body.img || "Updated image";
            n.fournisseur=req.body.fournisseur|| "Updated fournisseur";
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Article.deleteOne({_id: req.params.articleId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};