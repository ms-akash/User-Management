const Sequelize = require('sequelize');
const db = require('../config/database');

const UserEmployment = db.define('user',{
    user_id : {
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
    }
},{
    tableName : 'user_employment',
})

module.exports = UserEmployment