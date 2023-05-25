const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');

router.post('/',async (req, res)=>{
    const {userid} = req.body
    
    User.destroy({
        where : {
            'id' : userid
        }
    })
    .then((response)=>{
        res.send("User Account deleted successfully")
    })
    .catch((err)=>{
        res.send(err)
    })
})


module.exports = router