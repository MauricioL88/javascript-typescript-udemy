const pessoa = {
    nome: 'Mauricio',
    sobrenome: 'Lisboa',
    // idade: 36,
    endereco: {
        rua: 'A',
        numero: 2
    }
}

// Atribuição via desistruturação
const { nome: n = '', sobrenome = '' , endereco } = pessoa
console.log(n, sobrenome, endereco)

// Acessando objetos dentro de objetos
const { endereco: { rua: r = 'Padrão', numero: nu = 123 } } = pessoa
console.log(r, nu)

const { idade: age = 0 } = pessoa
console.log(age);
