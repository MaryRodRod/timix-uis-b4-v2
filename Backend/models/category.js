const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

const categorySchema = new Schema({
    name_category: { type: String, unique:true, require:true}
},{
    versionKey: false // set to false then it wont create in mongodb
}
);

categorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Categorias', categorySchema);