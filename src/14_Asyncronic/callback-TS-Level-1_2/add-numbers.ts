
export function addNumbers(a: number, b: number, callback: (sum: number) => void): void {
    const sum = a + b;
    callback(sum);
}

function alertWindow(sum: number): void {
    window.alert(sum)
}

addNumbers(5, 7, alertWindow)


// addNumbers(5, 7, (sum) => {
//     console.log(sum);
// });
