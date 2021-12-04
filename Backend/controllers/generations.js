const Generation = require("../models/generation");

exports.getGenerations = (req, res) => {
    Generation.find().then((listGenerations) => {
    res.status(200).json(listGenerations);
    });
};

exports.getGeneration = (req, res) => {
    const id = req.params.id;

    Generation.findById(id).then((result) => {
    console.log(result);
    res.status(200).json(result);
    });
};


exports.postGeneration = (req, res) => {
    console.log(req.body);
  // generations.push(req.body);
    const generationAdd = new Generation({
        name_generation: req.body.name_generation
    });


    generationAdd.save().then((generationadd) => {
    console.log(generationadd);

    res.status(201).json({ message: "Generacion creada" });
    });
};

exports.delGeneration = (req, res) => {
    Generation.deleteOne({ _id: req.params.id }).then((result)=> {
        console.log(result); 
        if (result.deletedCount > 0){
            res.status(200).json({ message:'Generacion eliminada'});
        }else {
            res.status(200).json({ message:'Generacion no encontrada'});
        }          
    });
};

exports.updateGeneration = (req, res) => {
    const id = req.params.id;


    const generation = new Generation({
        _id: id,
        name_generation: req.body.name_generation
    });

    Generation.updateOne({ _id: id}, generation).then(
    (result) => {
        if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Actualización exitosa" });
        } else {
        res.status(200).json({ message: "Autenticación fallida" });
        }
    }
    );
};

