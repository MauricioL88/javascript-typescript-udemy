// Exemplo com setInterval


// Função para mostrar a hora
function mostrarHora() {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR')
}


// Fução para ser aceita como referência de parâmetro no setInteval
function funcaoDoInteval() {
    console.log(mostrarHora());    
}

// Função que configura um intervalo de exibição
// setInterval(funcaoDoInteval, 1000)

// Otimizando o código adicionando uma função anônima como referência
const timer = setInterval(() => {
    console.log(mostrarHora());    
}, 1000)

// Função que define o tempo a ser exibido
setTimeout(() => {
    clearInterval(timer)
}, 6000)