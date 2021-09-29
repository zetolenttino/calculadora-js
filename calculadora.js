var parteA = undefined
var operador = undefined
var parteB = undefined

function preencher(texto) {
    if ('0123456789,'.includes(texto)) {
        const valor = document.calcform.visor.value += texto
        if (operador) // operador !== undefined ou null ou 0 ou false ou ''
            parteB = valor;
        else
            parteA = valor;
    } else if (texto === '+') {
        operador = texto
        document.calcform.visor.value = ''
    } else if (texto === '=') {
        calcParse()
    }
}

function limparCampo() {
    document.calcform.visor.value = '';
}

function calcParse() {
    // const expressao = parteA.replace(/,/g, '.') + operador + parteB.replace(/,/g, '.')
    // const expressaoComReturn = 'return ' + expressao // return 1+2
    // const funcaoQueCalculaAExpressao = new Function([], expressaoComReturn) // ~é como se declarasse a funcao abaixo
    // resultado = funcaoQueCalculaAExpressao();
    let resultado
    if (operador === '+') resultado = parseFloat(parteA) + parseFloat(parteB)
    document.calcform.visor.value = resultado.toLocaleString('pt-BR');
}