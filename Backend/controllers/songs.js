const Song = require("../models/song");
const songs = [
    {
    cancion: "la Fama",
    artista: "Hector lavoe",
    genero: "Salsa",
    },
];

exports.getsongs = (req, res) => {
    Song.find().then((listSongs) => {
    res.status(200).json(listSongs);
    });
};

exports.postsongs = (req, res) => {
    console.log(req.body);
  // songs.push(req.body);
    const songAdd = new Song({
    name_song: req.body.name_song,
    artist: req.body.artist,
    genre: req.body.genre,
    });

    songAdd.save().then((songadd) => {
    console.log(songadd);
    res.status(201).json({ message: "Cancion creada" });
    });
};

exports.delSong = (req, res) => {
    Song.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Cancion eliminada'});
        }else {
            res.status(200).json({ message:'Cancion no encontrada'});
        }          
    });
};
