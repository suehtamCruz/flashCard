const mongoose = require('mongoose');
const {schema, replaceOne } = require('../models/userModel');
const User = mongoose.model('User',schema);


exports.createUser = async (data) => {
    let newUser = new User(data);
    await newUser.save();
    
}