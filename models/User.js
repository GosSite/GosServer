const mongoose = require('mongoose');

const User_scheme = new mongoose.Schema({
    ID: String,
});

const User = mongoose.model('User', User_scheme, 'User');

module.exports = User;
