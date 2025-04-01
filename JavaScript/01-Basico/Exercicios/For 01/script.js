const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]

// Selecionando o elemento para manipulação
const container = document.querySelector('.container')
// Criando um elemento para exibí-lo no DOM
const div = document.createElement('div')

// Iterando o array
for (let i = 0; i < elementos.length; i += 1) {
    // Desistruturando os objetos do array
    let { tag, texto } = elementos[i]
    // Criando os elementos de forma dinâmica utilizando a desistruturação anterior
    let el = document.createElement(tag)
    // Adicionando o texto no elemento criado
    el.innerText = texto
    // Adicionando todo o elemento na div criada
    div.appendChild(el)
}

container.appendChild(div)