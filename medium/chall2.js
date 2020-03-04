
// Name: Remove Surrounding Duplicate Items

function uniqueInOrder(sequence) {
	let precessor = sequence[0],
			resultArr = [];
	resultArr.push(precessor);
	for (let i = 1; i < sequence.length; i++) {
		if (sequence[i] !== precessor) {
			resultArr.push(sequence[i]);
		}
		precessor = sequence[i];
	}
	return resultArr;
}

uniqueInOrder("AAAABBBCcAA");


/* Description:

Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.

*/