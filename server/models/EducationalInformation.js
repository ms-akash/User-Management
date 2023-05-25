const Sequelize = require('sequelize');
const db = require('../config/database');

const EducationalInformation = db.define('user',{
    id : {
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
    }
},{
    tableName : 'educational_information'
})

module.exports = EducationalInformation