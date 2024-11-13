// write two functions that convert between celsius and fahrenheit and vice versa
// round result to 1 decimal

const convertToCelsius = function (number) {
	// convert a given number from fahrenheit to celsius
	let fahrenheit = number;
	let celsius = (fahrenheit - 32) * (5 / 9);
	return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (number) {
	// convert a given number from celsius to fahrenheit
	let celsius = number;
	let fahrenheit = (celsius * 9) / 5 + 32;
	return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
