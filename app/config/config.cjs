require('dotenv').config();

const dbHost = process.env.DATABASE_HOST || '127.0.0.1';

module.exports = {
  development: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    host: dbHost,
  },
  production: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    host: dbHost,
  },
  test: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    host: dbHost,
  },
};