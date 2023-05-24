const Sequelize = require('sequelize');
module.exports = new Sequelize('profiles', 'postgres', 'akash0211', {
    host : 'localhost',
    dialect : 'postgres'
})