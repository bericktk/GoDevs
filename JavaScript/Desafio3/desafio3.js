const palavras = []

function adicionarPalavra() {
    const palavra = document.querySelector('#palavra')
    const novaPalavra = palavra.value
    palavras.push(novaPalavra)
    palavra.value = ''
    const listaPalavras = document.querySelector('#palavras-adicionadas')
    listaPalavras.textContent = palavras.join(' - ');
}

function inverterLista() {
    const novaLista = []
    for (let i = palavras.length - 1; i >= 0; i--) {
        novaLista.push(palavras[i]);
    }
    const resultado = document.querySelector('#resultado');
    resultado.textContent = novaLista.join(', ');
}