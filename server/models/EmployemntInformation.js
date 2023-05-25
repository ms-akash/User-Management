const Sequelize = require('sequelize');
const db = require('../config/database');

const EmployemntInformation = db.define('user',{
    empli_d : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    user_id : {
        type : Sequelize.INTEGER
    },
    employeed : {
        type : Sequelize.BOOLEAN
    }
},{
    tableName : 'employemnt_information'
})

module.exports = EmployemntInformation