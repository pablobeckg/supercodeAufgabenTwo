const numbers = [5, 3, 9, 1, 7];

export function showMaximum(numbers: number[], callback: (max: number) => number): void {
    const max = Math.max(...numbers);
    console.log(max);
    callback(max);
}

function callback(max: number): number {
    console.log('Finished with showMaximum');
    return max;
}

showMaximum(numbers, callback);

function powerOfTen(max: number): number {
    const hochTen = Math.pow(max, 10)
    console.log(hochTen)
    return hochTen;
}

showMaximum(numbers, powerOfTen)
