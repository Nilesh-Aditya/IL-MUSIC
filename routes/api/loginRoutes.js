const route = require('express').Router();
const User = require('../../models/login');

route.get('/', async (req, res) => {

    try {
        // make check funtion or middleware to check the login credentials
        
        console.log('Successfully login');
        res.send('hi from login route');
    
    } catch (error) {
        console.log('error occured');
        console.error(error);

        res.status(400).json({ error: error });
    }
});

module.exports = route;