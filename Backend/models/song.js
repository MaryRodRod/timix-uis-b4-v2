const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    name_song: { type: String, require:true},
    artist: { type: String, require:true},
    genre: { type: String, require:true}
});

module.exports = mongoose.model('Canciones', songSchema);