const Category = require("../models/category");

exports.getCategories = (req, res) => {
    Category.find().then((listCategories) => {
    res.status(200).json(listCategories);
    });
};

exports.getCategory = (req, res) => {
    const id = req.params.id;

    Category.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};


exports.postCategory = (req, res) => {
    console.log(req.body);
  // categorys.push(req.body);
    const categoryAdd = new Category({
        name_category: req.body.name_category
    });


    categoryAdd.save().then((categoryadd) => {
    console.log(categoryadd);

    res.status(201).json({ message: "Categoria creada" });
    });
};

exports.delCategory = (req, res) => {
    Category.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Categoria eliminada'});
        }else {
            res.status(200).json({ message:'Categoria no encontrada'});
        }          
    });
};

exports.updateCategory = (req, res) => {
    const id = req.params.id;

    const category = new Category({
        _id: id,
        name_category: req.body.name_category
    });

    Category.updateOne({ _id: id}, category).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};

