const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name_user: { type: String, require:true},
    email: { type: String, unique: true, require:true},
    password: { type: String, require:true},
    rol: { type: mongoose.Schema.Types.ObjectId, ref: "Roles", require:true},
    registration_date: { type: Date, defaultz: Date, require:true}

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Usuarios', userSchema);