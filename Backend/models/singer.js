const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const singerSchema = new Schema({
    name_singer: { type: String, require:true},
    nationality : { type: String, require:true},

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Artistas', singerSchema);