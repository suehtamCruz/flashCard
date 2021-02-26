const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const SchemaCard = new Schema({
    questao : {
        type : String,
        required : true
    },
    resposta : {
        type : String,
        required : true
    },
    user : {
        type : String,
        required : true,
    }
})
module.exports = mongoose.model('Card', SchemaCard);