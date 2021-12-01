const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');  
const app = express();



const Songsroutes = require('./routes/songs'); 

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

mongoose.connect("mongodb+srv://TiMiX:MisionTic2021*@timix.ktalb.mongodb.net/TiMiX?retryWrites=true&w=majority")
.then(( )=> {
    console.log('estoy conectado a mi Base de TiMiX')
})
.catch(()=> {
    console.log('tenemos problemas para conectarte con TiMiX')
});



app.use('/api/songs', Songsroutes);

module.exports = app;