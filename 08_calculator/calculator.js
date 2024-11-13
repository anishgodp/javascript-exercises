const add = function (a, b) {
	// function to add two numbers
	const result = a + b;
	return result;
};

const subtract = function (a, b) {
	// function to subtract two numbers
	const result = a - b;
	return result;
};

const sum = function (array) {
	// function to sum an array
	const result = array.reduce((total, current) => total + current, 0);
	return result;
};

const multiply = function (array) {
	// function to multiply two numbers
	return array.reduce((product, current) => product * current);
};

const power = function (a, b) {
	// function to raise one number to the power of another
	const result = Math.pow(a, b);
	return result;
};

const factorial = function (n) {
	// function to compute the factorial of a number
	let product = 1;
	for (let i = n; i > 0; i--) {
		product *= i;
	}
	return product;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
