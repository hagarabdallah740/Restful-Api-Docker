// Connection
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    // 3 Parameters for Connection
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        // Connection for database and App container .
        host: process.env.PG_HOST,
        dialect: 'postgres',
    }
);

module.exports = sequelize;
