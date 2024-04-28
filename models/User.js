const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User_scheme = new Schema({
    ID: String,
    login:String,
    password:String,
    Banned:Boolean
});

const User = mongoose.model('User', User_scheme, 'User');

module.exports = User;
