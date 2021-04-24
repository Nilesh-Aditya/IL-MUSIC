const route = require('express').Router();

route.get('/', async (req, res) => {

    try {
        const new_user = await new User.create({});
        
        console.log('Succesfully new user created');
        res.send('hi from signUp route');
        
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error });
    }
});

module.exports = route;