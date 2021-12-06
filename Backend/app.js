const express = require('express');
var cors = require('cors');
var timixDB = require('./modules/timixDB')
const mongoose = require('mongoose');  
const app = express();



const Songsroutes = require('./routes/songs'); 
const Singersroutes = require('./routes/singers'); 
const Playlistsroutes = require('./routes/playlists'); 
const Categoriesroutes = require('./routes/categories'); 
const Generationsroutes = require('./routes/generations'); 
const Userlistsroutes = require('./routes/userlists'); 
const Usersroutes = require('./routes/users');  
const Rolsroutes = require('./routes/rols'); 
const Albumsroutes = require('./routes/albums'); 


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


app.use('/api/songs', Songsroutes);
app.use('/api/singers', Singersroutes);
app.use('/api/playlists', Playlistsroutes);
app.use('/api/categories', Categoriesroutes);
app.use('/api/generations', Generationsroutes);
app.use('/api/userlist', Userlistsroutes);
app.use('/api/users', Usersroutes);
app.use('/api/rols', Rolsroutes);
app.use('/api/albums', Albumsroutes);

module.exports = app;
