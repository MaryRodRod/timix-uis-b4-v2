const User = require("../models/user");

exports.getUsers = (req, res) => {
    User.find().then((listUsers) => {
    res.status(200).json(listUsers);
    });
};

exports.getUser = (req, res) => {
    const id = req.params.id;

    User.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};


exports.postUser = (req, res) => {
    console.log(req.body);
  // users.push(req.body);
    const userAdd = new User({
        name_user: req.body.name_user,
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol,
        registration_date: req.body.registration_date
    });


    userAdd.save().then((useradd) => {
    console.log(useradd);

    res.status(201).json({ message: "Usuario creado" });
    });
};

exports.delUser = (req, res) => {
    User.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Usuario eliminado'});
        }else {
            res.status(200).json({ message:'Usuario no encontrado'});
        }          
    });
};

exports.updateUser = (req, res) => {
    const id = req.params.id;

    const user = new User({
        _id: id,
        name_user: req.body.name_user,
        email: req.body.email,
        password: req.body.password,
        rol: req.rolData.rolId
    });

    User.updateOne({ _id: id}, user).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};
