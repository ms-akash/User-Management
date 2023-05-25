const Sequelize = require('sequelize');
const db = require('../config/database');

const Mobile = db.define('user',{
    user_id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    mobile_number : {
        type : Sequelize.STRING
    }
},{
    tableName : 'mobile',
})

module.exports = Mobile