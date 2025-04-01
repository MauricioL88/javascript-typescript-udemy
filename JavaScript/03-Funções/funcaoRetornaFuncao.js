function falaFrase(comeco) {
    function final(final) {
        return comeco + ' ' + final
    }
    return final
}

const inicioFala = falaFrase('Olá')
const finalFala = inicioFala('Mauricio!')

// Retona a função interna, se tornando uma função
console.log(inicioFala);

// Retorna a primeira fala + undefined
console.log(inicioFala());

// Retorna toda frase
console.log(finalFala);

console.log();
console.log();
console.log();

// --------- OUTRO EXEMPLO ------------

function criarMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criarMultiplicador(2)
const triplica = criarMultiplicador(3)
const quadriplica = criarMultiplicador(4)

console.log(duplica(10));
console.log(triplica(20));
console.log(quadriplica(25));