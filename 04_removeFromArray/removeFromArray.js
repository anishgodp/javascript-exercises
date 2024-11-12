const removeFromArray = function (...args) {
	// First argument is the array
	const array = args[0];
	// Get all other arguments (elements to remove)
	const elementsToRemove = args.slice(1);

	// Filter the array to keep only elements that are not in elementsToRemove
	return array.filter((item) => !elementsToRemove.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;
