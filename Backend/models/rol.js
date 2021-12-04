const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const rolSchema = new Schema({
    name_rol: { type: String, require:true}

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Roles', rolSchema);