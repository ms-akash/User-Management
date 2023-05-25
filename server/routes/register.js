const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Address = require('../models/Address')
const EducationalInformation = require('../models/EducationalInformation')
const EmployemntInformation = require('../models/EmployemntInformation') 
const UserEmployment = require('../models/UserEmployment')
const Personal = require('../models/Personal')
const UserCardDetails = require('../models/UserCardDetails')
const bcrypt = require('bcryptjs');

var add, emplId
var exist = true

const getNewAddress = async (city, state,country)=>{
    await Address.findAll({
        attributes : ['id'],
        order : [
            ['id', 'DESC']
        ],
        limit : 1,
        raw : true
    }).then((a)=>{
        var {id} = a[0]
        add = id + 1
    })
    .catch((error)=> console.log(error))
}

const getExistingAddress = async (city, state, country)=>{
    await Address.findAll({
        attributes : ['id'],
        where : {
            'city' : city,
            'state' : state,
            'country' : country
        }
    })
    .then((resultAddress)=>{
        const {id} = resultAddress[0]
        add = id
    })
    .catch((error)=>{
        exist = false
        console.log(error)
    })
}

const getEmplId = async ()=>{
    await EmployemntInformation.findAll({
        attributes : ['empl_id'],
        order : [
            ['empl_id', 'DESC']
        ],
        limit : 1,
        raw : true
    }).then((resultEmploy)=>{
        const {empl_id} = resultEmploy[0]
        emplId = empl_id + 1;
        console.log("FUNCTION----------------" + emplId)
    }).catch(err=>console.log(err))
}

router.post('/',async (req, res)=>{
    var  userId
    const {name, password, gender, age, dob, city, state, country, mobile_number} = req.body
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt)
    address = await getExistingAddress(city, state, country)
    if(!exist) address = await getNewAddress(city, state, country)
    await getEmplId()
    console.log("ROUTE----------------" + emplId)
    await User.findAll({
        attributes : ['id'],
        order : [
            ['id', 'DESC']
        ],
        limit : 1
    })
        .then((user)=>{
            var {id} = user[0]
            userId = id + 1
            
            if(!exist){
            Address.create({
                'id' : add,
                'city' : city,
                'state' : state,
                'country' : country,
                'createdAt' : new Date().toJSON().slice(0, 10),
                'updatedAt' : new Date().toJSON().slice(0, 10)
            }).then((resultMobile)=>{console.log('successfully inserted')}).catch((err)=>console.log(err))
        }
            User.create({
                'id' : userId,
                'name' : name,
                'gender' : gender,
                'age' : age,
                'dob' : dob,
                'address' : add,
                'password' : hashedPassword,
                'createdAt' : new Date().toJSON().slice(0, 10),
                'updatedAt' : new Date().toJSON().slice(0, 10),
                'mobile_number' : mobile_number
            })
            .then((resultUser)=>{
                EducationalInformation.create({
                    'user_id' : userId,
                    'createdAt' : new Date().toJSON().slice(0, 10),
                    'updatedAt' : new Date().toJSON().slice(0, 10)
                }).then((r)=>{console.log('successfully inserted')}).catch((err)=>console.log(err))

                EmployemntInformation.create({
                    'empl_id' : emplId,
                    'user_id' : userId,
                    'createdAt' : new Date().toJSON().slice(0, 10),
                    'updatedAt' : new Date().toJSON().slice(0, 10)
                }).then((r)=>{console.log('successfully inserted')}).catch((err)=>console.log(err))

                Personal.create({
                    'user_id' : userId,
                    'createdAt' : new Date().toJSON().slice(0, 10),
                    'updatedAt' : new Date().toJSON().slice(0, 10)
                }).then((resultMobile)=>{console.log('successfully inserted')}).catch((err)=>console.log(err))

                UserCardDetails.create({
                    'user_id' : userId,
                    'createdAt' : new Date().toJSON().slice(0, 10),
                    'updatedAt' : new Date().toJSON().slice(0, 10)
                }).then((resultMobile)=>{console.log('successfully inserted')}).catch((err)=>console.log(err))

                UserEmployment.create({
                    'empl_id' : emplId,
                    'createdAt' : new Date().toJSON().slice(0, 10),
                    'updatedAt' : new Date().toJSON().slice(0, 10)
                }).then((resultMobile)=>{console.log('successfully inserted')}).catch((err)=>console.log(err))

                res.send('Registration Successfully, your user id is ' + userId)
            })
            .catch((error)=>console.log(error))
        })
        .catch(err=>console.log(err)); 
})


module.exports = router