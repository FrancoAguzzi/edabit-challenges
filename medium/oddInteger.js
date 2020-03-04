
// Name: Find the Odd Integer
// URL: https://edabit.com/challenge/GaWzhCsGSHcWyGoZh

function findOdd(arr) {
    let timesFound = 0;
    let oddInteger;
    arr.forEach((currentInteger) => {
        arr.forEach((integer) => {
            if (currentInteger === integer) timesFound += 1;
        })
        if (timesFound % 2 !== 0) oddInteger = currentInteger;
        timesFound = 0;
    })
    return oddInteger;
}

findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);


/* Description:

Create a function that takes an array and finds the integer which appears an odd number of times. */