// Selecionar as classes a serem trabalhadas
const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')


// Função para criar um elemento do tipo lista
function criarLista() {
    const elementoLista = document.createElement('li')
    return elementoLista
}

// Adicionando um evento de criar uma tarefa quando a tecla 'Enter' for pressionada
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (inputTarefa.value) return criarTarefa(inputTarefa.value)
    }
})

// Capturar os valores e criando tarefas do input
function criarTarefa(textoInput) {
    const lista = criarLista()
    lista.innerText = textoInput
    // Adicionando a lista no elemento 'ul'
    tarefas.appendChild(lista)
    limparInput()
    // gerando o botão para cada tarefa
    criaBotaoApagar(lista)
    // salvando as tarefas
    salvarTarefas()
}

// Criando um evento para captura do valores no input ao clicar no botão, com validação se não estiver vazio.
btnTarefa.addEventListener('click', function () {
    if (inputTarefa.value) return criarTarefa(inputTarefa.value)
})

// Função para limpar o elemento 'input' quando adicioná-lo na tarefa
function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus()
}

// Função para criar um botão que apaga a tarefa criada
function criaBotaoApagar(tarefa) {
    // criando um espaçamento entre a tarefa e o botão
    tarefa.innerText += ' '
    // criando o botão
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    tarefa.appendChild(botaoApagar)
    // Adicionando uma classe ao atributo
    botaoApagar.setAttribute('class', 'apagar')
}

// Adicionando um evento ao clicar o botão apagar
document.addEventListener('click', function (e) {
    const el = e.target
    // verificação para capturar o evento do clicar no botão 'apagar'
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

// Função para salvar as tarefas
function salvarTarefas() {
    // caputando os elementos 'li's' que foram criadas, gerando tipo de dados NodeList
    const tarefasLi = tarefas.querySelectorAll('li')

    // Capturando os valores
    const listaDeTarefas = []
    for(let tarefa of tarefasLi) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar','').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    // Transformando o array das tarefas em formato JSON
    const tarefasJson = JSON.stringify(listaDeTarefas)

    // Salvado os dados num espaço dentro navegador
    localStorage.setItem('tarefas', tarefasJson)
}

// Função para ler as tarefas e lançá-las no navegador
function adicionaTarefasSalvas() {
    const tarefa = localStorage.getItem('tarefas')
    // Converter as tarefas em elementos NodeList
    const listaDeTarefas = JSON.parse(tarefa)

    for(let tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}

adicionaTarefasSalvas()