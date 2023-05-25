const Sequelize = require('sequelize');
const db = require('../config/database');

const UserEmployment = db.define('user',{
    empl_id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    organisation_name : {
        type : Sequelize.STRING
    },
    annual_income : {
        type : Sequelize.INTEGER
    },
    role : {
        type : Sequelize.STRING
    },
    working : {
        type : Sequelize.BOOLEAN
    },
    createdAt : {
        type : Sequelize.DATE
    },
    updatedAt : {
        type : Sequelize.DATE
    }
},{
    tableName : 'user_employment',
})

module.exports = UserEmployment