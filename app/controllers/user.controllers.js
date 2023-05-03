const router = require("express").Router()
const body = require("body-parser")
router.use(body.json());

var users=[
    {
        login: 'amira',
        password: 'amiraa'
    }
]

// Créer et sauvegarder une nouvelle commande 
exports.creer = async (req, res) => {
    try {
        let result = users.find(user => user.login == req.body.login);
        if (result) {
            if (result.password == req.body.password) {
                res.status(200).send({
                    message: "Successful login!!"
                })
            } else {
                res.status(200).send({
                    message: "Password incorrect!!"
                })
            }
        }
        else {
            res.status(200).send({
                message: "User not found!!"
            })
        }
} catch (error) {
    res.status(500).send(error);
}
};