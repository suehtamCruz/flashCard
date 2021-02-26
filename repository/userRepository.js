const mongoose = require('mongoose');
const {schema, replaceOne } = require('../models/userModel');
const User = mongoose.model('User',schema);
const card = require('./cardRepository');

exports.createUser = async (data) => {
    let newUser = new User(data);
    await newUser.save();

}

exports.getUsers = async () => {
    let users = await User.find({},'id user');
    return users;
}
exports.getCards = async (id) => {
    let cardUser = await card.getCardsUser(id);
    return cardUser;
}

exports.updateUser = async (id,data) => {
     await User.findByIdAndUpdate(id,{
        user : data.user,
        pass : data.pass,
    });
}

exports.deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
}