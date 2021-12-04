const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    name_user: { type: String, require:true},
    email: { type: Number, require:true},
    password: { type: String, require:true},
    rol: { type: Schema.ObjectId, ref: "Roles", require:true},
    registration_date: { type: Date, require:true}

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Usuarios', userSchema);