
// Name: A Redundant Function

function redundant(str) {
	return function red() {
		return str;
	}
}

redundant("apple");


/* Description:

Write a function redundant that takes in a string str and returns a function that returns str. */