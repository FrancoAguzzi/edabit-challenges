
// Name: A Redundant Function

function redundant(str) {
	return function red() {
		return str;
	}
}

redundant("apple");