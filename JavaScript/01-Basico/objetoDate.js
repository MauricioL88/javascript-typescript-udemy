// criação do Objeto Date da função construtora
// tem como ordem em seus parâmetros: ano, mês, dia, hora, min, seg, `miliseg
// parâmetro vazio retorna a data atual e se tiver somente 1 reconhece como miliseg
const data = new Date()

// retorna a data em padrão americano
console.log(data.toDateString())
// ou com hora e time zone
console.log(data.toString());

// Retornando...
// Dia
console.log('Dia: ', data.getDate())
// Mês
console.log('Mês: ', (data.getMonth()) + 1)
// Ano
console.log('Ano: ', data.getFullYear())
// Hora
console.log('Hora: ', data.getHours())
// Minuto
console.log('Minuto: ', data.getMinutes())
// Segundo
console.log('Segundo: ', data.getSeconds())
// Milisegundo
console.log('Milisegundo: ', data.getMilliseconds())
// Dia da semana
console.log('Dia da semana: ', (data.getDay()) + 1)

// adicionar zero a esquerda caso seja menor que 10
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

// Formatando a data
function formataData() {
    const data = new Date()
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = data.getFullYear()
    return `${dia} / ${mes} / ${ano}`
}

const dataBrasil = formataData()
console.log('Data formatada: ' + dataBrasil)
