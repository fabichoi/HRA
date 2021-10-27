const db = require('../models');
const Hanja = db.hanjas;

exports.create = (req, res) => {
    const hanja = new Hanja({
        level: req.body.level,
        mean: req.body.mean,
        shape: req.body.shape,
        sound: req.body.sound
    });

    hanja
        .save(hanja)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Hanja."
            });
        });

};

exports.findAll = (req, res) => {
    Hanja.findAll()
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found Hanjas"});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving Hanjas"});
        });
};

exports.findOne = (req, res) => {
    const id = parseInt(req.params.id);

    Hanja.findOneByHanjaId(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found Hanja with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving Hanja with id=" + id});
        });
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};
