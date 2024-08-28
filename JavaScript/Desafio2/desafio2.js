// Desafio 2

const chunks = document.querySelector('#chunks')
const btn = document.querySelector('#btn')

function createChunks(num) {
    return Array(num).fill('"chunk"').join('-')
}

btn.addEventListener('click', ()=>{
    const lista = document.createElement('li')
    lista.innerHTML = createChunks(Number(chunks.value))
    const listaChunks = document.querySelector('#lista-chunks')
    listaChunks.append(lista)

    chunks.value = ''
    chunks.focus()
})
  