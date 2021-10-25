const router = require('express').Router();
const Hanja = require('../models/hanja');

router.get('/', (req, res) => {
    Hanja.findAll()
        .then((hanjas) => {
            if (!hanjas.length) return res.status(404).send({err: 'Hanja not found'});
            res.send(`find successfully: ${hanjas}`);
        })
        .catch(err => res.status(500).send(err));
});

router.get('/hanja/:hanjaId', (req, res) => {
    Hanja.findOneByHanjaId(req.params.hanjaId)
        .then((hanja) => {
            if (!hanja) return res.status(404).send({err: 'Hanja not found'});
            res.send(`findOne successfully: ${hanja}`);
        })
        .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
    Hanja.create(req.body)
        .then(hanja => res.send(hanja))
        .catch(err => res.status(500).send(err));
});


router.put('/hanja/:hanjaId', (req, res) => {
    Hanja.updateByTodoid(req.params.hanjaId, req.body)
        .then(hanja => res.send(hanja))
        .catch(err => res.status(500).send(err));
});

router.delete('/hanja/:hanjaId', (req, res) => {
    Hanja.deleteByTodoid(req.params.hanjaId)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
});

module.exports = router;