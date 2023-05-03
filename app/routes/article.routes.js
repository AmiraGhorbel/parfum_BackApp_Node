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

module.exports = (app) => {
    const articles = require('../controllers/article.controllers.js');
    app.post('/articles',articles.creer); 
    app.get('/articles',articles.afficherTout);
    app.get('/articles/:articleId',articles.afficherUn);
    app.put('/articles/:articleId',articles.modifier);
    app.delete('/articles/:articleId',articles.supprimer)
}