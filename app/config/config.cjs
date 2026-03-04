require('dotenv').config();

const dbDialect = process.env.DATABASE_HOST ? 'postgres' : 'sqlite';

module.exports = {
  development: {
    dialect: dbDialect,
    storage: './database.sqlite',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || '127.0.0.1',
  },
  test: {
    dialect: 'sqlite',
    storage: './database.test.sqlite',
  },
  production: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || 'db',
  },
};