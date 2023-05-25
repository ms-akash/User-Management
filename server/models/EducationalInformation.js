const Sequelize = require('sequelize');
const db = require('../config/database');

const EducationalInformation = db.define('user',{
    user_id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    qualification : {
        type : Sequelize.STRING
    },
    sslc : {
        type : Sequelize.FLOAT
    },
    hsc : {
        type : Sequelize.FLOAT
    },
    cgpa : {
        type :  Sequelize.FLOAT
    },
    createdAt : {
        type : Sequelize.DATE
    },
    updatedAt : {
        type : Sequelize.DATE
    }
},{
    tableName : 'educational_information'
})

module.exports = EducationalInformation