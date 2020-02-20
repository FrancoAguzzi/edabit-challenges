
// Name: Seven Boom!

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