const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const songSchema = new Schema({
    name_song: { type: String, require:true},
    año: { type: Number, require:true},
    artist: { type: String, require:true},
    album: { type: String, require:true},
    category: { type: String, require:true},
    generation: { type: String, require:true},
},{
    versionKey: false // set to false then it wont create in mongodb
}
);


module.exports = mongoose.model('Canciones', songSchema);