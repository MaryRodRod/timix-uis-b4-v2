const Userlist = require("../models/userlist");

exports.getUserlists = (req, res) => {
    Userlist.find().then((listUlists) => {
    res.status(200).json(listUlists);
    });
};

exports.getUserlist = (req, res) => {
    const id = req.params.id;

    Userlist.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};


exports.postUserlist = (req, res) => {
    console.log(req.body);
  // ulists.push(req.body);
    const ulistAdd = new Userlist({
        playlist: req.body.name_ulist,
        song: req.body.song

    });


    ulistAdd.save().then((ulistadd) => {
    console.log(ulistadd);

    res.status(201).json({ message: "Lista  creada" });
    });
};

exports.delUserlist = (req, res) => {
    Userlist.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Lista  eliminada'});
        }else {
            res.status(200).json({ message:'Lista  no encontrada'});
        }          
    });
};

exports.updateUserlist = (req, res) => {
    const id = req.params.id;

    

    const ulist = new Userlist({
        _id: id,
        name_ulist: req.body.name_ulist,
        año: req.body.año,
        artist: req.body.artist,
        album: req.body.album,
        category: req.body.category,
        generation: req.body.generation
    });

    Userlist.updateOne({ _id: id}, ulist).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};
