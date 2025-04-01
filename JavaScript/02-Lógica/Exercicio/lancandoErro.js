function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando a instância de do tipo Date.");
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

try {
    const data = new Date('07-04-1988 08:30:53')
    const hora = retornaHora(11)
    console.log(hora);
} catch (error) {
    console.log(error);    
} finally {
    console.log("Tenha um bom dia!");
}
