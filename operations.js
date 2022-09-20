const express = require('express');
const ExpressError = require('./expressError');
const { convertAndValidateNumsArray, findMean } = require('./helpers');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Homepage!');
});

app.get('/mean', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError('You must provide numbers.', 400);
	}
	let numsAsStrings = req.query.nums.split(',');
	let nums = convertAndValidateNumsArray(numsAsStrings);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}

	let result = {
		operation: 'mean',
		result: findMean(nums)
	};
	return res.send(result);
});
// mean

// median

// mode

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
