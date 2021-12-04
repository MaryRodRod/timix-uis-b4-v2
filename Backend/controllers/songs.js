const Song = require("../models/song");

exports.getSongs = (req, res) => {
    Song.find().then((listSongs) => {
    res.status(200).json(listSongs);
    });
};

exports.getSong = (req, res) => {
    const id = req.params.id;

    Song.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};


exports.postSong = (req, res) => {
    console.log(req.body);
  // songs.push(req.body);
    const songAdd = new Song({
        name_song: req.body.name_song,
        año: req.body.año,
        artist: req.body.artist,
        album: req.body.album,
        category: req.body.category,
        generation: req.body.generation
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

exports.updateSong = (req, res) => {
    const id = req.params.id;

    

    const song = new Song({
        _id: id,
        name_song: req.body.name_song,
        año: req.body.año,
        artist: req.body.artist,
        album: req.body.album,
        category: req.body.category,
        generation: req.body.generation
    });

    Song.updateOne({ _id: id}, song).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};

