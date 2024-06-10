function generateLottoNumber() {
    const randomNumber: number =  Math.ceil(Math.random() * 100);
    if(randomNumber <= 49) {
        return randomNumber
    } else {
        throw new Error('Number bigger than 49')
    }
}

const lottoNumbers: number[] = [];

while (lottoNumbers.length < 7) {
    try {
        const randomNumber = generateLottoNumber();
        if(!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber)
        }
    } catch (error) {
        console.error((error as Error).message)
    }
}

console.log(lottoNumbers)