
// Name: No Hidden Fees

function hasHiddenFee(prices, t) {
    let total = 0
    let tPriceNumber = parseInt(t.substring(1));
    prices.forEach((price) => {
        let currentPriceNumber = parseInt(price.substring(1));
        total += currentPriceNumber
    });
    return total !== tPriceNumber;
}

hasHiddenFee(["$2", "$4", "$1", "$8"], "$15");


/* Description:

Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false. */