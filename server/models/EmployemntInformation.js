const Sequelize = require('sequelize');
const db = require('../config/database');

const EmployemntInformation = db.define('user',{
    empl_id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    user_id : {
        type : Sequelize.INTEGER
    },
    employeed : {
        type : Sequelize.BOOLEAN
    },
    createdAt : {
        type : Sequelize.DATE
    },
    updatedAt : {
        type : Sequelize.DATE
    }
},{
    tableName : 'employment_information'
})

module.exports = EmployemntInformation