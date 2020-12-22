const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',async (req,res) => {
    console.log("FETCHING USERS");
    await db.blog.findAll().then(users =>{
        res.send(users);
    }).catch(err => {
        res.status(404).json({
            message:err
        })
    })
})

router.post('/',async (req,res) => {
    console.log("Creating users");
    await db.blog.create({
        title: req.body.title,
        content: req.body.content,
    }).then(result => {
        res.send(result);
    }).catch(err => {
        res.status(404).json({
            message:err
        })
    })
})

router.delete('/:id', async (req,res) => {
    await db.blog.destroy({
        where: {id : req.params.id}
    }).then(result => {
        res.status(500).json({
            message:"user Deleted"
        })
    }).catch(err => {
        res.status(404).json({
            message: err
        })
    })
})

module.exports = router;