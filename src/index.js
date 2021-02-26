const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('',
{useNewUrlParser: true});


app.listen(8000);