const route = require('express').Router();

route.get('/', (req, res) => {
    res.send('hi from login route');
});

module.exports = route;