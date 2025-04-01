/*
    Escreva uma função que recebe um número e retorne o seguinte:
    - Número é divísel por 3 = Fizz;
    - Número é divísel por 5 = Buzz;
    - Número é divísel por 3 e 5 = FizzBuzz;
    - Número NÃO é divísel por 3 e 5 = Retorna o prório número;
    - Checar se o número é realmente um número = Retorna o prório número;
    - Use a função com números de 0 a 100;
*/

const min = 0
const max = 100

function aleatorio(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

function fizzBuzz(numero) {
    if (isNaN(numero)) {
        console.log(`${numero} não é um número!`);
    } else {
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log(`${numero} - FizzBuzz!`);
        } else if (numero % 3 === 0) {
            console.log(`${numero} - Fizz!`);
        } else if (numero % 5 === 0) {
            console.log(`${numero} - Buzz!`);
        } else {
            console.log(`${numero} não é Fizz, nem Buzz!`);
        }
    }
}

for (let i = 0; i <= 25; i += 1) {
    let rand = aleatorio(min, max)
    fizzBuzz(rand)
}
