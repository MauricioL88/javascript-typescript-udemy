function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto;
        default:
            console.log('Dia da semana inválido!');
            break;
    }
}

const data = new Date('1988-07-04 00:00:00')
const diaSemana = data.getDay()
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)



console.log(diaSemana + 1, diaSemanaTexto);