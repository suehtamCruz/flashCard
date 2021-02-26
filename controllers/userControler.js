const express = require('express');
const routes = express.Router();
const repo = require('../repository/userRepository');

exports.createUser = async (require, response) => {
    
        await repo.createUser({
            user : require.body.user,
            pass : require.body.pass
        })
        response.status(201).json({
            message : "Usuário criado com sucesso!",

        })
}
exports.getUsers = async (require , response) => {
    try{
        let users = await repo.getUsers();
        response.status(200).json(users)
    }catch(e){
        response.status(400).json({
            message : "Erro ao buscar usuários",
            error : e,
        })
    }
}
exports.getCards = async (require , response ) => {
    try{
        let cardsUser = await repo.getCards(require.params.id);
        response.status(200).json(cardsUser);
    }catch(e){
        response.status(400).json({
            message : "Erro ao consultar cards do usuário!",
            erro : e
        })
    }

}
exports.update = async (require , response) =>{
    try{
        let user = await repo.updateUser(require.params.id , require.body);
       
            response.status(200).json({
                message : "Usuário atualizado com sucesso!"
            });
        
    }catch(e){
        response.status(400).json({
            message : "Erro ao atualizar o usuario",
            error : e,
        })
    }
}
exports.deleteUser = async (require , response) => {
    try{
        await repo.deleteUser(require.params.id);
        response.status(200).json({
            message : "Usuário removido com sucesso!"
        })
    }catch(e){
        response.status(400).json({
            message : "Erro ao deletar usuário!",
            erro : e
        })
    }
}