const mongoose = require('mongoose');
const {schema, replaceOne } = require('../models/cardModel');
const Card = mongoose.model('Card',schema);


exports.create = async (data) =>{
    let cardNew = new Card(data);
    await cardNew.save();
}

exports.lista = async () => {
    let listaCard = await Card.find({},'id questao resposta');
    return listaCard;
}

exports.update = async (id,data) => {
    await Card.findByIdAndUpdate(id,{
        questao : data.questao,
        resposta : data.resposta
    })
}
exports.delete = async (id) => {
    await Card.findByIdAndDelete(id);
}