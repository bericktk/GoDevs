// Função que recebe um número qualquer de números inteiros como argumentos e retorna a média aritmética entre eles.

// Desafio 1
const btn = document.querySelector('#btn')
const mediaTotal = document.querySelector('#total-media')
const notasPaciais = document.querySelector('#notas')

btn.addEventListener('click', ()=>{
    let qtd_notas = Number(prompt('Digite a quantidade de notas que deseja realizar a média'))
    let notas = 0
    for (let i = 0; i < qtd_notas; i++) {
        let valores = Number(prompt('Digita as notas:'))
        notas += valores
        let parciais = document.createElement('li')
        notasPaciais.appendChild(parciais)
        parciais.innerHTML = `${valores}`
    }
    let media = notas / qtd_notas
    mediaTotal.innerHTML = `A média final das notas é: ${media}`
})

