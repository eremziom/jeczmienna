const express = require('express');
const router = express.Router();
const Rtvagd = require('../models/rtvagd.model');

router.get('/rtvagds', async (req, res) => {
    try {
        const result = await Rtvagd
        .find().sort({level: -1})
        if(!result) res.status(404).json({post: 'Not found...'});
        else res.json(result);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.post('/rtvagds', async (req, res) => {
    try {
        const { rtvagd } = req.body;
        const newRtvagd = new Rtvagd({rtvagd: rtvagd});
        await newRtvagd.save();
        res.json({message: 'Add Rtvagd Success'});
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router