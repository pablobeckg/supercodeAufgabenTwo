export function calculateSumAndMore(a: number, b: number, callback1: (result1: number) => number, callback2: (result2: number) => number) {
    const result1 = a + b;

    const callback1Result = callback1(result1);
    callback2(callback1Result)
    return callback2
}

function callback1(result1: number) {
    return result1 * 2;
}

function callback2(result2: number) {
    const toBinary = result2.toString(2)
    const toNumber = Number(toBinary)
    console.log(toNumber)
    return toNumber
}

calculateSumAndMore(3, 5, callback1, callback2)
calculateSumAndMore(8, 15, callback1, callback2)
calculateSumAndMore(2, 5, callback1, callback2)
calculateSumAndMore(9, 14, callback1, callback2)
calculateSumAndMore(200, 13, callback1, callback2)