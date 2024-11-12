/* create a function that determines whether or not a given year is a leap year
     leap years are determined by the following rules.
     divisible by 4 (like 1800 and 2004)
     however years divisible by 100 are not leap years (like 1800 and 1900)
     unless they are divisible by 400 (like 1600 and 2000)
     use an if statement and && to make sure all the conditions are met properly */

const leapYears = function (number) {
	// store year in variable
	const year = number;
	// store year rules in variables
	const divisibleFour = year % 4 === 0;
	const divisibleHundred = year % 100 === 0;
	const divisibleFourHundred = year % 400 === 0;

	// check if all rules are met in if statement
	if (divisibleFour && (!divisibleHundred || divisibleFourHundred)) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = leapYears;
