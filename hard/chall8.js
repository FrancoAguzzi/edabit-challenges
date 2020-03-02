
// Name: Numbers in Strings

function numInStr(arr) {
    let newArr = [];
    arr.forEach((str) => {
        if (str.match(/\d/)) newArr.push(str)
    })
    return newArr;
}

numInStr(['abc', 'abc10']);
