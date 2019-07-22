require('dotenv').config();

module.exports = {
  client: 'postgresql',
  connection: {
    database: process.env.PG_CONNECTION_STRING,
  },
};
