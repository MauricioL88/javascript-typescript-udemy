// Função para gerar um número aleatório
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback) {
    // definindo um tempo para exibir a mensangem
    setTimeout(function() {
        console.log('f1')
        if(callback) callback()
    }, rand())
}

function f2(callback) {
    // definindo um tempo para exibir a mensangem
    setTimeout(function() {
        console.log('f2')
        if(callback) callback()
    }, rand())
}

function f3(callback) {
    // definindo um tempo para exibir a mensangem
    setTimeout(function() {
        console.log('f3')
        if(callback) callback()
    }, rand())
}

// Garantindo que as funções sejam exibidas em ordem, mesmo com as definições de intevalo ativada
f1(function() {
    f2(function() {
        f3(function() {
            console.log('Olá Mauricio!')            
        })
    })
})

console.log()
console.log()

// Alternativa para não criar várias funções aninhadas
function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Olá Mauricio!')    
}

f1(f1Callback)
