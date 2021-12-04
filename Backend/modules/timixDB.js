const mongoose = require('mongoose');  


var server = "timix.ktalb.mongodb.net";
var db = "TiMiX";
var password = "MisionTic2021*";

class TiMiXDB{
    constructor(){
        mongoose.connect(`mongodb+srv://${db}:${password}@${server}/${db}?retryWrites=true&w=majority`)
        .then(( )=> {
            console.log('estoy conectado a la Base de TiMiX')
        })
.       catch(()=> {
            console.log('tenemos problemas para conectarte con TiMiX')
});
    }
}

module.exports = new TiMiXDB();
