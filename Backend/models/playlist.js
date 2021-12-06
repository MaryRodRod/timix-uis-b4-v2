const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name_playlist: { type: String, require:true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Usuarios", require:true},

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Playlists', playlistSchema);