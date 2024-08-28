const btn = document.querySelector('#btn')
const palavra = document.querySelector('#palavra')
const result = document.querySelector('#resultado')

btn.addEventListener('click',()=>{
    let letras = palavra.value.replace(/\s+/g, '').toLowerCase();
    let maior = letras[0];

    for (let i = 1; i < letras.length; i++) {
        if (letras[i] > maior) {
            maior = letras[i];
        }
    }
    
    result.innerHTML = maior
    palavra.value = ''
    palavra.focus()
    return maior
})
