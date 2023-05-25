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

const update_users_table = (id, name, gender, age, dob, password)=>{
    check_for_name_update(id, name)
    check_for_gender_update(id, gender)
    check_for_age_update(id, age)
    check_for_dob_update(id, dob)
    //check_for_password_update(id, password)
}

const is_new_name = async (id, updated_name) =>{
    var isNew = false
    await User.findOne({
        attributes : ['name'],
        where : {
            'id' : id
        }
    }).then(user=>{
        const {name} = user
        
        if(name != updated_name){
            isNew = true
        }
    }).catch(err => {
        console.log(err)
    })
    return isNew
}

const update_name = async (id, name) =>{
    await User.update({
        'name' : name
    },{
        where : {
            'id' : id
        }
    }).then(()=>console.log('Updated')).catch((error)=>console.log(error))
}

const check_for_name_update = async (id, name) =>{
    if(name != null && await is_new_name(id, name)){
        await update_name(id, name)
    }else{
        console.log('No Updates')
    }
}

const is_new_gender = async (id, updated_gender) =>{
    var isNew = false
    await User.findOne({
        attributes : ['gender'],
        where : {
            'id' : id
        }
    }).then(user=>{
        const {gender} = user
        
        if(gender != updated_gender){
            isNew = true
        }
    }).catch(err => {
        console.log(err)
    })
    return isNew
}

const update_gender = async (id, gender) =>{
    await User.update({
        'gender' : gender
    },{
        where : {
            'id' : id
        }
    }).then(()=>console.log('Updated')).catch((error)=>console.log(error))
}

const check_for_gender_update = async (id, gender) =>{
    if(gender != null && await is_new_gender(id, gender)){
        await update_gender(id, gender)
    }else{
        console.log('No Updates')
    }
}

const is_new_age = async (id, updated_age) =>{
    var isNew = false
    await User.findOne({
        attributes : ['age'],
        where : {
            'id' : id
        }
    }).then(user=>{
        const {age} = user
        
        if(age != updated_age){
            isNew = true
        }
    }).catch(err => {
        console.log(err)
    })
    return isNew
}

const update_age = async (id, age) =>{
    await User.update({
        'age' : age
    },{
        where : {
            'id' : id
        }
    }).then(()=>console.log('Updated')).catch((error)=>console.log(error))
}

const check_for_age_update = async (id, age) =>{
    if(age != null && await is_new_age(id, age)){
        await update_age(id, age)
    }else{
        console.log('No Updates')
    }
}

const is_new_dob = async (id, updated_dob) =>{
    var isNew = false
    await User.findOne({
        attributes : ['dob'],
        where : {
            'id' : id
        }
    }).then(user=>{
        const {dob} = user
        
        if(dob != updated_dob){
            isNew = true
        }
    }).catch(err => {
        console.log(err)
    })
    return isNew
}

const update_dob = async (id, dob) =>{
    await User.update({
        'dob' : dob
    },{
        where : {
            'id' : id
        }
    }).then(()=>console.log('Updated')).catch((error)=>console.log(error))
}

const check_for_dob_update = async (id, dob) =>{
    if(dob != null && await is_new_dob(id, dob)){
        await update_dob(id, dob)
    }else{
        console.log('No Updates')
    }
}

const update_mobile_table = (id, mobile_number) =>{
    check_for_mobile_number_update(id, mobile_number)
}

// const update_address_table = (id, address, city, state, country) =>{
//     check_for_city_update(id, address, city, state, country)
//     check_for_state_update(id, address, state, country)
//     check_for_country_update(id, address, country)
// }

const update_personal_table = (id, is_married, physically_disabled)=>{
    check_for_is_married_update(id, is_married)
    check_for_physically_disabled_update(id,physically_disabled)
}

const is_new_is_married = async (id, updated_is_married) =>{
    var isNew = false
    await Personal.findOne({
        attributes : ['is_married'],
        where : {
            'user_id' : id
        }
    }).then(personal=>{
        const {is_married} = personal
        
        if(is_married != updated_is_married){
            isNew = true
        }
    }).catch(err => {
        console.log(err)
    })
    return isNew
}

const update_is_married = async (id, is_married) =>{
    await Personal.update({
        'is_married' : is_married
    },{
        where : {
            'user_id' : id
        }
    }).then(()=>console.log('Updated')).catch((error)=>console.log(error))
}

const check_for_is_married_update = async (id, is_married) =>{
    if(is_married != null && await is_new_is_married(id, is_married)){
        await update_is_married(id, is_married)
    }else{
        console.log('No Updates')
    }
}

const is_new_physically_disabled = async (id, updated_physically_disabled) =>{
    var isNew = false
    await Personal.findOne({
        attributes : ['physically_disabled'],
        where : {
            'user_id' : id
        }
    }).then(personal=>{
        const {physically_disabled} = personal
        
        if(physically_disabled != updated_physically_disabled){
            isNew = true
        }
    }).catch(err => {
        console.log(err)
    })
    return isNew
}

const update_physically_disabled = async (id, physically_disabled) =>{
    await Personal.update({
        'physically_disabled' : physically_disabled
    },{
        where : {
            'user_id' : id
        }
    }).then(()=>console.log('Updated')).catch((error)=>console.log(error))
}

const check_for_physically_disabled_update = async (id, physically_disabled) =>{
    if(physically_disabled != null && await is_new_physically_disabled(id, physically_disabled)){
        await update_physically_disabled(id, physically_disabled)
    }else{
        console.log('No Updates')
    }
}

const update_educational_informations_table = async (id, qualification, sslc, hsc, cgpa) => {
    await EducationalInformation.update({
        'qualification': qualification,
        'sslc': sslc,
        'hsc': hsc,
        'cgpa': cgpa
    },{
        where : {
            'user_id' : id
        }
    })
    .then(()=>{
        console.log('Updated')
    }).catch(err => console.log('Error updating' + err))
}

const update_employment_information_table = async (empl_id, employeed) =>{
    await EmployemntInformation.update({
        'employeed' : employeed
    },{
        where : {
            'empl_id' :empl_id
        }
    })
    .then(()=>{
        console.log('Updated')
    })
    .catch(err=>console.log("Not Updated"))
}

const update_user_employments_table = async (empl_id, organisation, annual_income, role, working) =>{
    await UserEmployment.update({
        'organisation_name' : organisation,
        'annual_income' : annual_income,
        'role' : role,
        'working' : working
    },{
        where : {
            'empl_id' :empl_id
        }
    })
    .then(()=>console.log("Updated"))
    .catch(err=>console.log("Not Updated"))
}

const update_address_table = async (address, city, state, country) =>{
    await Address.update({
        'city' : city,
        'state' : state,
        'country' : country
    },{
        where :{
            'id' : address
        }
    }).then(()=>console.log("Updated"))
    .catch(err=>console.log('Not Updated'))
}

const update_user_card_details_table = async (id, adhaar, pan, passport, voter_id) =>{
    await UserCardDetails.update({
        'adhaar' : adhaar,
        'pan' : pan,
        'passport' : passport,
        'voter_id' : voter_id
    },{
        where : { 
            'user_id' : id
        }
    }).then(()=>console.log("Updated"))
    .catch(err=>console.log('Not Updated'))
}

router.post('/',(req, res)=>{
    const {id, name, gender, age, dob, address, password, empl_id, organisation_name, annual_income,
        role, working, adhaar, pan, passport, voter_id,is_married, physically_disabled, mobile_number,
        employeed, qualification, sslc, hsc, cgpa, city, state, country} = req.body

        update_users_table(id, name, gender, age, dob, address, password)
        update_address_table(address, city, state, country)
        update_personal_table(id, is_married, physically_disabled)
        update_educational_informations_table(id,qualification, sslc, hsc, cgpa)
        update_employment_information_table(empl_id, employeed)
        update_user_employments_table(empl_id, organisation_name, annual_income, role, working)
        update_user_card_details_table(id, adhaar, pan, passport, voter_id)
        
        res.sendStatus(200)
})


module.exports = router