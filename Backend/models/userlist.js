const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userlistSchema = new Schema({
    playlist: { type: mongoose.Schema.Types.ObjectId, ref: "Playlists", require:true},
    song: { type: mongoose.Schema.Types.ObjectId, ref: "Conciones", require:true},

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Userlist', userlistSchema);