// função para gerar um número aleatório
function aleatorio(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

// variável e constantes para capturar o número aleatório
const min = 1
const max = 50
let rand

// Usando o laço while para capturar um número específico
let cont = 0
while(rand !== 25) {    
    (rand = aleatorio(min, max)) === 25 ? console.log(`O número ${rand} foi gerado depois de ${cont} tentativas.`) : cont = cont + 1  
}