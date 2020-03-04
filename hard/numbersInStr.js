
// Name: Numbers in Strings
// URL: https://edabit.com/challenge/eCPim4XcssdZdvs32

function numInStr(arr) {
    let newArr = [];
    arr.forEach((str) => {
        if (str.match(/\d/)) newArr.push(str)
    })
    return newArr;
}

numInStr(['abc', 'abc10']);


/* Description:

Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array. */