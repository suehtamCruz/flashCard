const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const SchemaUser = new Schema({
    user : {
        type : String,
        required : true,
        unique : true,
    },
    pass : {
        type : String,
        required : true,
    }
})
module.exports = mongoose.model('User', SchemaUser);