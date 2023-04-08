// To Create table for user
//*--------------------------*
// To make connection table of user with Db (user----db)
const Sequelize = require('sequelize');
const db = require('../util/database');

// to define user table (user model)
// *Database table*
const User = db.define('user', {
    id: {
        // increament user by 1 in defulte
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true  
    },
    // Paramters for user 
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = User;