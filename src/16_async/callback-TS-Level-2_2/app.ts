function processData(arr: number[], callback1: (arr: number[]) => number[], callback2: (arr: number[]) => void) {
    const sortedArray = callback1(arr)
    callback2(sortedArray)
}

function sortAbsteigend(arr: number[]) {
    const sortedArray = arr.sort((a: number, b: number) => b - a);
    return sortedArray;
}

function doubleArray(arr: number[]) {
    const doubleArray = arr.map((value) => value * 2)
    console.log(doubleArray) ;
}

const numbersArray: number[] = [2, 5, 6, 3, 8, 17, 7, 4, 4, 66, 3]

processData(numbersArray, sortAbsteigend, doubleArray)