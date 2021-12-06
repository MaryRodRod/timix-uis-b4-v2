const mongoose = require('mongoose');
require('dotenv').config() 


class TiMiXDB{
    constructor(){
        mongoose.connect(`mongodb+srv://${process.env.DB_BASE}:${process.env.DB_PASS}@${process.env.DB_SERVER}/${process.env.DB_BASE}?retryWrites=true&w=majority`)
        .then(( )=> {
            console.log('estoy conectado a la Base de TiMiX')
        })
.       catch(()=> {
            console.log('tenemos problemas para conectarte con TiMiX')
});
    }
}

module.exports = new TiMiXDB();
