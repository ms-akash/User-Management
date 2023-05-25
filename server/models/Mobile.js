const Sequelize = require('sequelize');
const db = require('../config/database');

const Mobile = db.define('user',{
    user_id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    mobile_number : {
        type : Sequelize.STRING
    },
    createdAt : {
        type : Sequelize.DATE
    },
    updatedAt : {
        type : Sequelize.DATE
    }
},{
    tableName : 'mobile',
})

module.exports = Mobile