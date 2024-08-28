const btn = document.querySelector('#btn')
const num = document.querySelector('#numero')
const result = document.querySelector('#resultado')

function maiorLetra(str) {
    // Remove espaços da string e converte para minúsculas
    let letras = str.replace(/\s+/g, '').toLowerCase();
    
    // Inicializa a variável para armazenar a maior letra
    let maior = letras[0];
    
    // Itera sobre cada letra para encontrar a maior
    for (let i = 1; i < letras.length; i++) {
        if (letras[i] > maior) {
            maior = letras[i];
        }
    }
    
    return maior;
}

// Exemplo de uso
console.log(maiorLetra("Jamylle Amaral Alves")); // Saída: x