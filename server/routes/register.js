const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');

router.post('/',async (req, res)=>{
    const {name, password, gender, age, dob, address} = req.body
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt)

    User.count()
        .then((user)=>{
            
            var id = user ;
            id = id - 10000

            User.create({
                'id' : id,
                'name' : name,
                'gender' : gender,
                'age' : age,
                'dob' : dob,
                'address' : address,
                'password' : hashedPassword,
                'createdAt' : new Date().toJSON().slice(0, 10),
                'updatedAt' : new Date().toJSON().slice(0, 10)
        })
            .then((user)=>{
                res.send('Registred Successfully with user id : ' + id)
            })
            .catch(err => res.send('Error' + err));
        })
        .catch(err=>console.log(err));
})


module.exports = router