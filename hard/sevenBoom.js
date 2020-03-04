
// Name: Seven Boom!
// URL: https://edabit.com/challenge/6R6gReGTGwzpwuffD

function sevenBoom(arr) {
	for (let i = 0; i < arr.length; i++){
		let currentItemStr = String(arr[i])
		if((currentItemStr.indexOf("7") !== -1)) {
			return "Boom!"
		}
	}
	return "there is no 7 in the array"
};

sevenBoom([2, 6, 7, 9, 3]);


/* Description:

Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array". */