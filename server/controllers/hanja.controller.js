const db = require('../models');
const Hanja = db.hanjas;

exports.findByLevel = (req, res) => {
    const level = req.params.level;

    Hanja.findByLevel(level).then(data => {
        if (!data) {
            res.status(404).send({message: "Not found Hanja in this level"});
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({message: "Error retrieving Hanja in this level"});
    });
};
