// Em uma lista de parágrafos, só irá selecionar a primeira
const paragrafos = document.querySelector('.paragrafo')

// Necessário criar uma estrutura de dados similar ao array, chamado NodeList, Elemento HTML
const nodeList = paragrafos.querySelectorAll('p')

// Registrar todas as propriedades CSS que está no Browser
const estiloBody = getComputedStyle(document.body)
// Captura a cor de fundo
const backgroundColorBody = estiloBody.backgroundColor

// Exibindo no navegador
console.log(backgroundColorBody)

// Iterando os elementos html e exibindo no navegador
// for(let p of nodeList) {
//     console.log(p);    
// }

// Exibindo os parágrafos com as cores do background da página html
for(let p of nodeList) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#fff'
}