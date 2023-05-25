const Sequelize = require('sequelize');
const db = require('../config/database');

const UserCardDetails = db.define('user',{
    user_id : {
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    adhaar : {
        type : Sequelize.INTEGER
    },
    pan : {
        type : Sequelize.STRING
    },
    passport : {
        type : Sequelize.STRING
    },
    voter_id : {
        type : Sequelize.STRING
    }
},{
    tableName : 'user_card_details'
})

module.exports = UserCardDetails