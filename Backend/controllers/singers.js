const Singer = require("../models/singer");

exports.getSingers = (req, res) => {
    Singer.find().then((listSingers) => {
    res.status(200).json(listSingers);
    });
};

exports.getSinger = (req, res) => {
    const id = req.params.id;

    Singer.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};


exports.postSinger = (req, res) => {
    console.log(req.body);
  // singers.push(req.body);
    const singerAdd = new Singer({
        name_singer: req.body.name_singer,
        nationality: req.body.nationality
    });


    singerAdd.save().then((singeradd) => {
    console.log(singeradd);

    res.status(201).json({ message: "Aritsta creada" });
    });
};

exports.delSinger = (req, res) => {
    Singer.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Aritsta eliminada'});
        }else {
            res.status(200).json({ message:'Aritsta no encontrada'});
        }          
    });
};

exports.updateSinger = (req, res) => {
    const id = req.params.id;

    

    const singer = new Singer({
        _id: id,
        name_singer: req.body.name_singer,
        nationality: req.body.nationality
    });

    Singer.updateOne({ _id: id}, singer).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};
