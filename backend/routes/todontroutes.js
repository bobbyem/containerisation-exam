const express = require('express');
const router = express.Router();
const Todont = require('../models/models');

router.post('/todont', async (req, res) => {
    try {
        const todont = new Todont({
            title: req.body.title,
            done: false,
        });

        const saveTodont = await todont.save();
        res.status(201).json(saveTodont);

        console.log("Todont created successfully!");
        console.log(saveTodont)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

router.get('/todont', async (req, res) => {
    try {
        const todonts = await Todont.find({});
        
        res.status(200).json(todonts);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

router.put('/todont', async (req, res) => {
    try {
        const todont = await Todont.findByIdAndUpdate(req.body.id, { done: true }, { new: true });
        
        res.status(200).json(todont);        
        console.log("Todont updated successfully!");
    } catch {
        res.status(400).json({message: err.message})
    }
})
 
module.exports = router;
