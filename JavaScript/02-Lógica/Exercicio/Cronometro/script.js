// Capturando os valores das classes no HTML
const relogio = document.querySelector('.timer')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

// Uma variável para receber os segundos
let segundos = 0
let timer

function crono() {
    // Criar uma função para capturar o tempo, usando como base data inicial da "computação moderna"
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000) // converter em milisegundos para aceitar a constante como parâmetro de referência
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT'
        })
    }

    // Função para iniciar a contagem do relógio
    function inicarRelogio() {
        timer = setInterval(function () {
            segundos += 1
            relogio.innerHTML = getTimeFromSeconds(segundos)
        }, 1000)
    }

    // Adicionando um evento para quando clicar nos botões
    document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('iniciar')) {
            clearInterval(timer)
            relogio.style.color = 'black'
            inicarRelogio()
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.style.color = 'red'
        }

        if (el.classList.contains('zerar')) {
            relogio.style.color = 'black'
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
}

crono()