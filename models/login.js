const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Enter a valid Email'],
        unique: true,
        lowercase: [true, 'Email should be in lowercase'],
        validate: [isEmail, 'Please Enter a valid Email']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Minimum password length should be above 6 charactors'],
        hide: true
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);