const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Address = require('../models/Address')
const EducationalInformation = require('../models/EducationalInformation')
const EmployemntInformation = require('../models/EmployemntInformation') 
const UserEmployment = require('../models/UserEmployment')
const Personal = require('../models/Personal')
const UserCardDetails = require('../models/UserCardDetails')

const getUserId = async (mobile_number) => {
    var userId
    await User.findOne({
        attributes : ['id'],
        where : {
            'mobile_number' : mobile_number
        }
    })
    .then((user)=>{
        const {id} = user
        userId = id
    })
    .catch((error) => {
        console.error(error)
    })

    return userId
}

router.get('/', async (req, res)=>{
    var userAddress, userEmplId
    const {mobile_number} = req.body
    const user_id = await getUserId(mobile_number) 
    var user, address, user_card_details, user_employment, educational_information, employment_information

    await User.findOne({
        attributes : ['id', 'name', 'password', 'age', 'gender', 'mobile_number','dob', 'address'],
        where : {'id' : user_id},
        raw : true
    }).then((u)=>{
        user = u
        userAddress = user.address
    })
    .catch((error) => res.send('Error ------> ' + error))

    await Address.findOne({
        attributes : ['city', 'state', 'country'],
        where :{
            'id' : userAddress
        },
        raw : true
    }).then((a)=>{address = a}).catch((error) => res.send(error))

    await UserCardDetails.findOne({
        attributes : ['adhaar', 'pan', 'passport', 'voter_id'],
        where : {
            'user_id' : user.id
        },
        raw : true
    }).then((r) => {user_card_details = r}).catch((error) => {res.send(error)})

    await EducationalInformation.findOne({
        attributes : ['qualification', 'sslc', 'hsc', 'cgpa'],
        where : {
            'user_id' : user.id
        },
        raw : true
    }).then((ei) => {educational_information = ei}).catch((error) => {res.send(error)})

    await EmployemntInformation.findOne({ 
        attributes : ['empl_id', 'employeed'],
        where : {
            'user_id' : user.id
        },
        raw : true
     }).then((empl_info) => {
        employment_information =empl_info
        userEmplId = employment_information.empl_id
     })

     await UserEmployment.findOne({
        attributes : ['organisation_name', 'annual_income', 'role', 'working'],
        where : {
            'empl_id' : userEmplId
        },
        raw : true
     }).then((userEmployement) =>{
        user_employment = userEmployement
     }).catch((error) => {res.send(error)})

    result = {...user, ...address, ...user_card_details, ...educational_information, ...employment_information, ...user_employment}
    delete result.address
    delete result.empl_id
    res.json(result)

    // res.json(user)
})


module.exports = router