/*
    Em JS a estrutura de execução do cógido é estruturado, ou seja, de cima para baixo, mas com funções callback podemos manipular a ordem de execução do código.
*/

// Função para gerar um número aleatório
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1() {
    // definindo um tempo para exibir a mensangem
    setTimeout(function() {
        console.log('f1')
    }, rand())
}

function f2() {
    // definindo um tempo para exibir a mensangem
    setTimeout(function() {
        console.log('f2')
    }, rand())
}

function f3() {
    // definindo um tempo para exibir a mensangem
    setTimeout(function() {
        console.log('f3')
    }, rand())
}

// Mesmo escrevendo a ordem de execução, o console.log vai ser exibido primeiro, as outras funções tem definido um intervalo aleatório de exibição
f1()
f2()
f3()
console.log('Olá Mauricio!')

// VERIFICAR O ARQUIVO funcaoCallback2.js