
export function addNumbers(a: number, b: number, callback: (sum: number) => void): void {
    const sum = a + b;
    callback(sum);
}

function consolelog(sum: number): void {
    console.log(sum)
}

addNumbers(5, 7, consolelog)


// addNumbers(5, 7, (sum) => {
//     console.log(sum);
// });
