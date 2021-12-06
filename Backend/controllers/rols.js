const Rol = require("../models/rol");

exports.getRols = (req, res) => {
    Rol.find().then((listRols) => {
    res.status(200).json(listRols);
    });
};

exports.getRol = (req, res) => {
    const id = req.params.id;

    Rol.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};


exports.postRol = (req, res) => {
    console.log(req.body);
  // rols.push(req.body);
    const rolAdd = new Rol({
        name_rol: req.body.name_rol
    });


    rolAdd.save().then((roladd) => {
    console.log(roladd);

    res.status(201).json({ message: "Rol creado" });
    });
};

exports.delRol = (req, res) => {
    Rol.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Rol eliminado'});
        }else {
            res.status(200).json({ message:'Rol no encontrado'});
        }          
    });
};

exports.updateRol = (req, res) => {
    const id = req.params.id;


    const rol = new Rol({
        _id: id,
        name_rol: req.body.name_rol
    });

    Rol.updateOne({ _id: id}, rol).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};
