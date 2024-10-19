let bancoPessoas = []

function criarPessoa(nome, sobreNome, idade) {
    return bancoPessoas.push({ nome, sobreNome, idade })
}

function exibirPessoa() {
    for (value of bancoPessoas) {
        console.log(value)
    }
}

criarPessoa("Maurício", "Lisboa", 36)
criarPessoa("Evelin", "Lisboa", 33)

exibirPessoa()