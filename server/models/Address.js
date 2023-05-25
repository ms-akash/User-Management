const Sequelize = require('sequelize');
const db = require('../config/database');

const Address = db.define('user',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    city : {
        type : Sequelize.STRING
    },
    state : {
        type : Sequelize.STRING
    },
    country : {
        type : Sequelize.STRING
    }
},{
    tableName : 'address'
})

module.exports = Address