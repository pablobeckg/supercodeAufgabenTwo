export const numberPromise: Promise<number[]> = new Promise<number[]>((resolve, reject) => {
    let randomNumbers: number[] = [];
        for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * 130) + 1; // Random number between 1 and 130
            randomNumbers.push(randomNumber);

            if (randomNumber > 100) {
                reject('Not smaller as 100');
                return;
            }
        }
        resolve(randomNumbers);
    });

numberPromise
.then((array) => {
    let plus7 = array.map(element => element + 7)
    return plus7
}).then((array) => {
    let mult2 = array.map(element => element * 2)
    return mult2
}).then((array) => {
    let min1 = array.map(element => element - 1)
    return min1
}).then((array) => {
    let mod2 = array.map(element => element % 2)
    return mod2
})
.then((array) => {
    console.log(array)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finished')
})
