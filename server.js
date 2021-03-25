const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./data/db');

const app = express();
connectDB();

app.use(express.static('public'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`app is running on port http://localhost:${PORT}`));


app.get('/', (req, res) => {
    res.send( '<p>hello</p>' );
})
