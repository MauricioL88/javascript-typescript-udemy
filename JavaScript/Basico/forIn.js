const frutas = ['maçã', 'uva', 'melão', 'kiwi']

// for in lê as posições do array ou as chaves do objeto
for(let indice in frutas) {
    console.log(indice);    
}

console.log('');

// opção para ler os valores
for(let indice in frutas) {
    console.log(frutas[indice]);    
}

console.log('');

const pessoa = {
    nome: 'Mauricio',
    sobrenome: 'Lisboa',
    idade: 36, 
}

// Exibindo as chaves do objeto
for(let chave in pessoa) {
    console.log(chave);    
}

console.log('');

// modo de exibir valores de um obejto da forma comum
console.log(pessoa.nome);
// ou
console.log(pessoa['nome']);

// exibindo os valores do objeto com o laço de repetição for in
console.log('');
for(let chave in pessoa) {
    console.log(chave+": "+pessoa[chave]);    
}
