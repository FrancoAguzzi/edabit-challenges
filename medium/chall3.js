
// Name: Get the Century

function century(year) {
	let yearStringified = String(year);
	let firstTwoDigits = yearStringified.substring(0, 2);
	let lastTwoDigits = yearStringified.substring(2);
	let century;
	(lastTwoDigits == 0) ? (century = parseInt(firstTwoDigits)) : (century = parseInt(firstTwoDigits) + 1);
	return (century > 20) ? `${century}st century` : `${century}th century`;
}

century(1000);