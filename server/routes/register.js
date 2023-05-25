const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Address = require('../models/Address')
const EducationalInformation = require('../models/EducationalInformation')
const EmployemntInformation = require('../models/EmployemntInformation') 
const UserEmployment = require('../models/UserEmployment')
const Mobile = require('../models/Mobile')
const Personal = require('../models/Personal')
const UserCardDetails = require('../models/UserCardDetails')
const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');

router.post('/',(req, res)=>{
    var address, userId, emplId
    const {name, password, gender, age, dob, city, state, country} = req.body
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt)

    const transaction = Sequelize.transaction()

    User.findAll({
        attributes : ['id'],
        order : [
            ['id', 'DESC']
        ],
        limit : 1
    })
        .then((user)=>{
            var {id} = user[0]
            userId = id + 1
            
            Address.findAll({
                attributes : ['id'],
                where : {
                    'city' : city,
                    'state' : state,
                    'country' : country
                }
            })
            .then((resultAddress)=>{
                var {addressid} = resultAddress[0]
                address = addressid
            })
            .catch((error)=>{
                Address.findAll({
                    attributes : ['id'],
                    order : [
                        ['id', 'DESC']
                    ],
                    limit : 1
                })
                .then((resultAddress)=>{
                    var {addressid} = resultAddress[0]
                    address = addressid + 1;

                    Address.create({
                        'id' : address,
                        'city' : city,
                        'state' : state,
                        'country' : country
                    },{transaction : transaction})
                })
                .catch((error)=> console.log(err))
            })

            User.create({
                'id' : userId,
                'name' : name,
                'gender' : gender,
                'age' : age,
                'dob' : dob,
                'address' : address,
                'password' : hashedPassword
            },{transaction : transaction})
            .then((resultUser)=>{
                EducationalInformation.create({
                    'user_id' : userId
                })
                EmployemntInformation.findAll({
                    attributes : ['empl_id'],
                    order : [
                        ['empl_id', 'DESC']
                    ],
                    limit : 1
                }).then((resultEmploy)=>{
                    const {empid} = resultEmploy[0]
                    emplId = empid + 1;

                    EmployemntInformation.create({
                        'empl_id' : emplId,
                        'user_id' : userId
                    },{transaction : transaction})
                }).console.log(err=>console.log(err))

                Mobile.create({
                    'user_id' : userId
                },{transaction : transaction})

                Personal.create({
                    'user_id' : userId
                },{transaction : transaction})

                UserCardDetails.create({
                    'user_id' : userId
                },{transaction : transaction})

                UserEmployment.create({
                    'empl_id' : emplId
                },{transaction : transaction})

                transaction.commit()
                res.send('Registration Successfully, your user id is ' + userId)
            })
            .catch((error)=>{
                transaction.rollback()
                console.log(err)
            })
        })
        .catch(err=>console.log(err));
})


module.exports = router