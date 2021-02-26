const mongoose = require('mongoose');
const {schema, replaceOne } = require('../models/cardModel');
const Card = mongoose.model('Card',schema);


exports.create = async (data) =>{
    let cardNew = new Card(data);
    await cardNew.save();
}

exports.lista = async () => {
    let listaCard = await Card.find({},'id questao resposta user');
    return listaCard;
}
exports.getCardsUser = async (id) => {
    let cardUser = await Card.find({user : id},'id questao resposta user');
    return cardUser;
}

exports.updateCard = async (id,data) => {
    await Card.findByIdAndUpdate(id,{
        questao : data.questao,
        resposta : data.resposta,
        idUser : data.idUser,
    })
}
exports.delete = async (id) => {
    await Card.findByIdAndDelete(id);
}
