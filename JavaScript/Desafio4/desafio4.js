const btn = document.querySelector('#btn')
const num = document.querySelector('#numero')
const result = document.querySelector('#resultado')

btn.addEventListener('click',()=>{
    let numStr = num.value.toString();
    let resultado = '';

    for (let i = 0; i < numStr.length; i++) {
        let digito = Number(numStr[i]);
        resultado += (digito * digito).toString();
    }
    
    
    result.innerHTML = resultado
    num.value = ''
    num.focus()
    return Number(resultado) 
})
