const Playlist = require("../models/playlist");

exports.getPlaylists = (req, res) => {
    Playlist.find().then((listPlaylists) => {
    res.status(200).json(listPlaylists);
    });
};

exports.getPlaylist = (req, res) => {
    const id = req.params.id;

    Playlist.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};

exports.postPlaylist = (req, res) => {
    console.log(req.body);
  // playlists.push(req.body);
    const playlistAdd = new Playlist({
        name_playlist: req.body.name_playlist,
        año: req.body.año,
        artist: req.body.artist,
        album: req.body.album,
        category: req.body.category,
        generation: req.body.generation
    });


    playlistAdd.save().then((playlistadd) => {
    console.log(playlistadd);

    res.status(201).json({ message: "Playlist creada" });
    });
};

exports.delPlaylist = (req, res) => {
    Playlist.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Playlist eliminada'});
        }else {
            res.status(200).json({ message:'Playlist no encontrada'});
        }          
    });
};

exports.updatePlaylist = (req, res) => {
    const id = req.params.id;
    // let image = "";
    // if (req.file) {
    // const url = req.protocol + "://" + req.get("host") + "/files/";
    // image = url + req.file.filename;
    // } else {
    // image = req.body.imageUrl;
    // }

    const playlist = new Playlist({
        _id: id,
        name_playlist: req.body.name_playlist,
        año: req.body.año,
        artist: req.body.artist,
        album: req.body.album,
        category: req.body.category,
        generation: req.body.generation
    });

    Playlist.updateOne({ _id: id}, playlist).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};

