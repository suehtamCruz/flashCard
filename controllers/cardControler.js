const express = require('express');
const routes = express.Router();
const repo = require('../repository/cardRepository');

exports.createCard = async (require , response) => {
    await repo.create({
        questao : require.body.questao,
        resposta : require.body.resposta
    })
    response.status(201).json({
        message : "Card criado com sucesso!"
    })
}

exports.getCards = async (require , response) => {
    try{    
        let cards = await repo.lista();
        response.status(200).json(cards);

    }catch(e){
        response.status(400).json({
            message : "Erro a procurar cards",
            erro : e   
        })
    }
}

exports.updateCard = async (require , response) => {
    try {
        await repo.update(require.params.id , require.body);
        response.status(200).json({
            message : "Card atualizado com sucesso!"
        })
    }catch(e){
        response.status(400).json({
            message : "Erro ao atualizar card",
            error : e
        })
    }
}

exports.deleteCard = async (require , response ) => {
    try{
        await repo.delete(require.params.id);
        response.status(200).json({
            message : "Card deletado com sucesso!"
        })
    }catch(e){
        response.status(400).json({
            message : "Erro ao deletar card!",
            erro : e
        })
    }
}