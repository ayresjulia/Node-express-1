const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/', async function (req, res, next) {
	try {
		let promises = req.body.developers.map(async dev => {
			return await axios.get(`https://api.github.com/users/${dev}`);
		});

		let results = await Promise.all(promises);

		let filteredResults = results.map(dev => ({ name: dev.data.name, bio: dev.data.bio }));

		return res.json(filteredResults);
	} catch (err) {
		next(err);
	}
});

app.listen(3000, function () {
	console.log('Server starting on port 3000');
});
