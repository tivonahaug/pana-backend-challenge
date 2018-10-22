try {
  const env = require('./env.js')
  env()
} catch(e) {}

module.exports = {
	client: 'pg',
	connection: process.env.PG_CONNECTION_STRING
};
