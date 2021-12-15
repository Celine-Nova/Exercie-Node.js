require('dotenv').config();
module.exports =
{
  "development": {
    "username": process.env.DB_DEV_USER,
    "password": process.env.DB_DEV_PWD,
    "database": process.env.DB_DEV_DATABASE,
    "host": process.env.DB_DEV_HOST,
    "port": process.env.DB_DEV_PORT,
    "dialect": process.env.DB_DEV_DIAL,
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
