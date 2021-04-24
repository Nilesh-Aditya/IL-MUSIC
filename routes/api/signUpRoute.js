const route = require('express').Router();

route.get('/', (req, res) => {
    res.send('hi from signUp route');
});

module.exports = route;