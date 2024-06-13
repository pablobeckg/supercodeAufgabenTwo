import WeatherType from "./weather-type"



const newPromise: Promise<WeatherType> = new Promise<WeatherType>((resolve, reject) => {
    const randomNumber: number = (Math.floor(Math.random()* 10))
    const randomWeather: WeatherType | undefined = WeatherType[randomNumber as unknown as keyof typeof WeatherType];
    if(randomNumber <= 6) {
        resolve(randomWeather)
    }else {
        reject('Weather forecast could not be determined')
    }
})

newPromise
.then((weather) => {
    console.log(weather)
})
.catch((text) => {
    console.log(text)
})
.finally()

console.log('hola')

export default newPromise;