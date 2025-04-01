// CRIANDO UMA CALCULADORA COM FACTORY FUNCTIONS
function criarCalculadora() {
    return {
        // Atributos
        // Capturando os elementos para os atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        //Métodos
        iniciar() {
            this.cliqueBotoes()
            this.pressionaBackSpace()
            this.pressionaEnter()
        },

        clicarBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target
                // verificação se o clique está ocorrendo na classe desejada
                if (el.classList.contains('btn-num')) {
                    // captura o valor pre-definido no btn
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaOperacao()
                }

            }.bind(this)) // Faz a função anônima apontar para o início da função principal 'clicarBotoes'
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaOperacao() {
            let conta = this.display.value

            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Conta Inválida!')
                    return
                }

                this.display.value = String(conta)
            } catch (e) {
                alert('Conta Inválida!')
                return
            }
        },

        pressionarEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaOperacao()
                }
            })
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault()
                    this.clearDisplay()
                }
            })
        }
    }
}

const calculadora = criarCalculadora()
calculadora.iniciar()


/*
    OBS:
    - Para referenciar um recurso dentro do objeto utiliza-se o 'this'; 
*/