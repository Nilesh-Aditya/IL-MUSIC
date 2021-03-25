const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.set('useFindAndModify', false)

const URI = process.env.dbURI

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('DB connected')
    } catch (err) {
        console.log(err.message);
        process.exit(1)
    }
}

module.exports = connectDB;