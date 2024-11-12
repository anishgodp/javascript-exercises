const sumAll = function (num1, num2) {
	// Check if inputs are integers AND non-negative
	// Returns 'ERROR' if either number is negative or not an integer
	if (
		!Number.isInteger(num1) ||
		!Number.isInteger(num2) ||
		num1 < 0 ||
		num2 < 0
	) {
		return "ERROR";
	}

	// Find the smaller and larger numbers using Math.min/max
	// This allows the function to work even if numbers are given in descending order
	const min = Math.min(num1, num2);
	const max = Math.max(num1, num2);

	// Initialize sum variable
	let sum = 0;

	// Loop from min number to max number (inclusive)
	// Add each number to sum as we go
	for (let i = min; i <= max; i++) {
		sum += i;
	}

	// Return the final sum
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
