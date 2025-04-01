const h1 = document.querySelector('.container h1')
const data = new Date()

/*
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sábado'
            return diaSemanaTexto;
    }
}


function getMes(numMes) {
    let mes
    switch (numMes) {
        case 0:
            mes = 'janeiro'
            return mes
        case 1:
            mes = 'fevereiro'
            return mes
        case 2:
            mes = 'março'
            return mes
        case 3:
            mes = 'abril'
            return mes
        case 4:
            mes = 'maio'
            return mes
        case 5:
            mes = 'junho'
            return mes
        case 6:
            mes = 'julho'
            return mes
        case 7:
            mes = 'agosto'
            return mes
        case 8:
            mes = 'setembro'
            return mes
        case 9:
            mes = 'outubro'
            return mes
        case 10:
            mes = 'novembro'
            return mes
        case 11:
            mes = 'dezembro'
            return mes
    }
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criarData(data) {
    const diaSemana = data.getDay()
    const numMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getMes(numMes)

    return `${nomeDia}, ${zeroEsquerda(data.getDate())} de ${nomeMes} de ${data.getFullYear()} 
        ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
}

h1.innerHTML = criarData(data)
*/

// Método mais otimizado:
h1.innerHTML = data.toLocaleString('pt-BR',
    {
        dateStyle: 'full',
        timeStyle: "short"
    }
)