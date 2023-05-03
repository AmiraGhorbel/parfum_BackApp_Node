module.exports = (app) => {
    const logins = require('../controllers/user.controllers.js');
    app.post('/logins',logins.creer);
}