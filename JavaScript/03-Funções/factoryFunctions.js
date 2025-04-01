// Usando função para criar um tipo de dado - FACTORY FUNCTIONS

function criarPessoa(nome = 'Fulano', sobrenome = 'de Tal', peso = 0, altura = 0.0) {
    return {
        nome,
        sobrenome,
        // Método GETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Método SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        fala: function () {
            // Chamando o método 'get' como atributo e passando uma função como referência no resultado de outra função
            return `${this.nomeCompleto} tem o IMC de: ${this.imc()}`
        },
        peso,
        altura,
        imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(1)
        }
    }
}

const p1 = criarPessoa()
p1.nomeCompleto = 'Mauricio Lisboa'
console.log(p1.nome)
console.log(p1.sobrenome)

