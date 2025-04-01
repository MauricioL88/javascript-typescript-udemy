let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c] = [1, 2, 3];

console.log(a, b, c);

// Realizando desestruturação com arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [um, dois, tres, ...resto] = nums // '...' depois de alguns parâmetro se torna restOperator
console.log(um , dois, tres)
console.log(resto)

// Realizando desestruturação de matriz
// Primeiro Indice:   0        1        2
// Segundo Indice:  0 1 2    0 1 2    0 1 2
const numMatriz = [[1,2,3], [4,5,6], [7,8,9]]

// Acessando os valores dos índices forma tradicional
console.log(numMatriz[1][2]);

// Acessando os valores dos índices forma desistruturada
const [,[,,seis]] = numMatriz
console.log(seis)
