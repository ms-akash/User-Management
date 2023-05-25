const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');

router.get('/', (req, res)=>{
    const {mobile_number, userpas} = req.body
    
    User.findOne({
        where : {
            'mobile_number' : mobile_number
        }
    })
    .then((user)=>{
        const {password} = user
        const isValid = bcrypt.compareSync(userpas, password)

        if(isValid){
            res.send(user)
        }else{
            res.send("User Id and Password Didn't Match")
        }
    })
    .catch(err=>{
        res.send("Account Not Found")
    })
})

module.exports = router