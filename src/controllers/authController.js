const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async(req,res)=> {
    console.log(req.body);
    try{
        const user = await User.create(req.body);
        console.log(user);
        console.log(req.body);

    return res.send({user});
    }catch(err) {
        return res.status(400).send({error: 'Registration failed'});
    }
    
});


router.get('/', async(req,res)=> {
    try{
        //const user = await User.create(req.body);
        
    return res.send({"teste":"teste"});
    //({user});
    }catch(err) {
        return res.status(400).send({error: 'failed'});
    }
    
});

module.exports = router;