const mongoose = require('mongoose');

const User_Apps_scheme = new mongoose.Schema({
    ID: String,
    label: String,
    packageName: String
});

const User_Apps = mongoose.model('User_Apps', User_Apps_scheme, 'User_Apps');

module.exports = User_Apps;
