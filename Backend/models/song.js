const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const songSchema = new Schema({
    name_song: { type: String, require:true},
    año: { type: Number, require:true},
    artist: { type: mongoose.Schema.Types.ObjectId, ref: "Aritstas", required: true},
    album: { type: mongoose.Schema.Types.ObjectId, ref: "Albumes", required: true},
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Categorias", required: true},
    generation: { type: mongoose.Schema.Types.ObjectId, ref: "Generacianes", required: true},
},{
    versionKey: false // set to false then it wont create in mongodb
}
);


module.exports = mongoose.model('Canciones', songSchema);