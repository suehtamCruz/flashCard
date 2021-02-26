const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {conectString} = require('../lock');

const conection = mongoose.connect(conectString,  {useNewUrlParser: true , useUnifiedTopology: true }  );
if(conection){
    console.log("conectado ao servidor");
}else{
    console.log("não conectado")

}

app.listen(8000);