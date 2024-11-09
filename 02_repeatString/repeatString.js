const repeatString = function () {
	//create variable to hold string to return
	let result = "";
	const number = 3;
	//create loop to repeat number of times and add string to the result of each loop
	for (let i = 0; i < number; i++) {
		result += "hey";
	}

	//return result
	return result;
};

// Do not edit below this line
module.exports = repeatString;
