function convertAndValidateNumsArray(numsAsStrings) {
	let result = [];
	for (let i = 0; i < numsAsStrings.length; i++) {
		let valToNumber = Number(numsAsStrings[i]);

		if (Number.isNaN(valToNumber)) {
			return new Error(`The value '${numsAsStrings[i]}' is not a valid number.`);
		}
		result.push(valToNumber);
	}
	return result;
}

function findMean(nums) {
	return (
		nums.reduce(function(acc, cur) {
			return acc + cur;
		}) / nums.length
	);
}

module.exports = {
	convertAndValidateNumsArray,
	findMean
};
