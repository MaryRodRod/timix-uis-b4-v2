const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userlistSchema = new Schema({
    playlist: { type: Schema.ObjectId, ref: "Playlists", require:true},
    songs: { type: Schema.ObjectId, ref: "Conciones", require:true},

},{
    versionKey: false // set to false then it wont create in mongodb
}
);

module.exports = mongoose.model('Userlist', userlistSchema);