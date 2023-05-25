const Sequelize = require('sequelize');
const db = require('../config/database');

const Personal = db.define('user',{
    user_id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    is_married : {
        type : Sequelize.BOOLEAN
    },
    physically_disabled : {
        type : Sequelize.BOOLEAN
    }
},{
    tableName : 'personal'
})

module.exports = Personal