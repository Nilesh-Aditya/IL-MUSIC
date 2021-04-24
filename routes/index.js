const route = require('express').Router();

route.use('/login', require('./api/loginRoutes'));
route.use('/signUp', require('./api/signUpRoute'));


module.exports = route;