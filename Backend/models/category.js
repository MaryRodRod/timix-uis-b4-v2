const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const categorySchema = new Schema({
    name_categoria: { type: String, require:true}
},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Categorias', categorySchema);