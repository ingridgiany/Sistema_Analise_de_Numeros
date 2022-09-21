let numero = document.querySelector('input#caixanumero')
let sessao = document.querySelector('select#sessao')
let saida = document.querySelector('div#saida')
let listaNumeros = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if (isNumero(numero.value) && !inLista(numero.value, listaNumeros)){
        listaNumeros.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O valor ${numero.value} foi adicionado.`
        sessao.appendChild(item)
        saida.innerHTML =''
    }else {
        alert('Valor inválido ou já adicionado na lista!')
    }

    numero.value = ''
    numero.focus()
}

function gerar(){
    if (listaNumeros.length == 0){
        alert('Adicione valores para poder finalizar.')
    }else {
    saida.innerHTML = ''
    saida.innerHTML += `<p>Ao todo temos ${listaNumeros.length} números cadastrados.</p>`

    let menor = Math.min.apply(null, listaNumeros)
    saida.innerHTML += `<p>O menor número é ${menor}</p>`
    let maior = Math.max.apply (null, listaNumeros)
    saida.innerHTML += `<p>O maior número é ${maior}</p>`

    let soma = 0
    for(let i = 0; i < listaNumeros.length; i++){
        soma += listaNumeros[i]
    }
    saida.innerHTML += `<p>A soma entre os números é ${soma}.</p>`

    let media = soma / listaNumeros.length
    saida.innerHTML += `<p>A média entre os números digitados é de ${media.toFixed(2)}</p>`
}
}