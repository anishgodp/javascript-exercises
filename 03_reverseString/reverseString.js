const reverseString = function () {
	// create a variable for the input
	let input = arguments[0];

	// return input which has been split into an array, reversed and joined
	return input.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
