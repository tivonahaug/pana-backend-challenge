const app = require('express')()
const cors = require('cors')
const PORT = 4000;
const knex = require('knex')(require("./knexfile.js"))
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
	res.send(`Backend Challenge API!`);
});

/**
 *  Request Transactions
 * {get} /transactions
 */
app.get('/transactions', (req, res, next) => {
	knex.select().from('transactions').then(function(transactions) {
		res.send(transactions);
	});
});

/**
 *  Create a Transaction
 * {post} /transactions
 */
app.post('/transactions', (req, res, next) => {
	knex.insert(req.body).into('transactions').then(function(id) {
		res.sendStatus(id);
	});
});

app.use((error, req, res, next) => res.status(500).send(error.toString()));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
