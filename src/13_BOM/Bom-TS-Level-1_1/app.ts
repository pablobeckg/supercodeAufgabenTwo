console.log('Start: Warten für 3 Sekunden..')

setTimeout(() => {
    console.log('Erledigt. Du hst 3 Sekunden verschwendet')
},3000)

let counter = 11;

const interval1 = setInterval(() => {
    counter--
    if(counter >0) {
        console.log(counter)
    }   else {
        console.log('Endlich Feierabend!')
        clearInterval(interval1)
    }
},1000)