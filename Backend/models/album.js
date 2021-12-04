const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const albumSchema = new Schema({
    name_album: { type: String, require:true},
    cover: { type: Number, require:false},

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Albumes', albumSchema);