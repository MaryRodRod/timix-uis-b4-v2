const Album = require("../models/album");

exports.getAlbums = (req, res) => {
    Album.find().then((listAlbums) => {
    res.status(200).json(listAlbums);
    });
};

exports.getAlbum = (req, res) => {
    const id = req.params.id;

    Album.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};


exports.postAlbum = (req, res) => {
    console.log(req.body);
  // albums.push(req.body);
    const albumAdd = new Album({
        name_album: req.body.name_album,
        cover: req.body.cover
    });


    albumAdd.save().then((albumadd) => {
    console.log(albumadd);

    res.status(201).json({ message: "Album creado" });
    });
};

exports.delAlbum = (req, res) => {
    Album.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Album eliminado'});
        }else {
            res.status(200).json({ message:'Album no encontrado'});
        }          
    });
};

exports.updateAlbum = (req, res) => {
    const id = req.params.id;


    const album = new Album({
        _id: id,
        name_album: req.body.name_album,
        cover: req.body.cover
    });

    Album.updateOne({ _id: id}, album).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};

