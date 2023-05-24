const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    name : {
        type : Sequelize.STRING
    },
    gender : {
        type : Sequelize.STRING
    },
    age : {
        type : Sequelize.INTEGER
    },
    dob : {
        type : Sequelize.DATE
    },
    address : {
        type : Sequelize.INTEGER
    },
    password : {
        type : Sequelize.TEXT
    },
    createdAt : {
        type : Sequelize.DATE
    },
    updatedAt : {
        type : Sequelize.DATE
    }
},{
    tableName : 'users'
})

module.exports = User