
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