
// Name: A Redundant Function
// URL: https://edabit.com/challenge/hzxN9bAebBPNqdQto

function redundant(str) {
	return function red() {
		return str;
	}
}

redundant("apple");


/* Description:

Write a function redundant that takes in a string str and returns a function that returns str. */