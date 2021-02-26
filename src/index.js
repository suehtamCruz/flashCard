const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {conectString} = require('../lock');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoute = require('./routes/userRoute');
const cardRoute = require('./routes/cardRoute');

const conection = mongoose.connect(conectString,  {useNewUrlParser: true , useUnifiedTopology: true }  );
if(conection){
    console.log("conectado ao servidor");
}else{
    console.log("não conectado")

}
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8000);

app.use('/user',userRoute);
app.use('/cards',cardRoute);