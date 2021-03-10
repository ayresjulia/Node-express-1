const fs = require('fs');
const axios = require('axios');
const url = require('url');

fs.readFile('urls.txt', 'utf8', async function (err, data) {
	if (err) throw err;
	let array = data.toString().split('\n');
	for (let url of array) {
		const myURL = new URL(url);
		let res = await axios.get(url);
		if (!res.data.includes('window.location.replace(url)')) {
			fs.appendFile(myURL.host, res.data, function (err) {
				if (err) throw err;
				console.log(`Wrote to ${myURL.host}`);
			});
		} else {
			console.log(`Couldn't download ${url}`);
		}
	}
});
