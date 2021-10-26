const hanja = require('../models/hanja.model');

// Create and Save a new Tutorial
exports.create = (req, res) => {

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    hanja.findAll()
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    hanja.findOneByHanjaId(id)
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

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};