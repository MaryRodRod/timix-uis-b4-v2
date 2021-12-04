const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const generationSchema = new Schema({
    name_generation: { type: String, require:true},

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Generaciones', generationSchema);