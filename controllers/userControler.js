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

