var parteA = undefined
var operador = undefined
var parteB = undefined

function preencher(texto) {
    if ('0123456789,'.includes(texto)) {
        document.calcform.visor.value += texto // concatena no visor
        if (operador) // operador !== undefined ou null ou 0 ou false ou ''
            parteB = document.calcform.visor.value;
        else
            parteA = document.calcform.visor.value;
    } else if (texto === '+') {
        operador = texto
        document.calcform.visor.value = '' <<
            << << < HEAD
    } else if (texto === '-') {
        operador = texto
        document.calcform.visor.value = ''
    } else if (texto === '/') {
        operador = texto
        document.calcform.visor.value = ''
    } else if (texto === '*') {
        operador = texto
        document.calcform.visor.value = ''
    } else if (texto === '=') { ===
        === =
    } else if (texto === '-') {
        operador = texto
        document.calcform.visor.value = ''
    } else if (texto === '*') {
        operador = texto
        document.calcform.visor.value = ''
    } else if (texto === '/') {
        operador = texto
        document.calcform.visor.value = ''
    } else if (texto === '=') { >>>
        >>> > 80 cecbc(implementando AC no teste, e arrumando bugde AC)
        calcParse()
        document.calcform.visor.value = '';
    }
}

function limparCampo() {
    document.calcform.visor.value = ''; <<
    << << < HEAD
    delete parteB;
    delete parteA;
    delete operador;
    delete resultado; ===
    === =
    parteA = undefined
    parteB = undefined
    operador = undefined >>>
        >>> > 80 cecbc(implementando AC no teste, e arrumando bugde AC)
}

function calcParse() {
    let resultado
    if (operador === '+' || operador === '-' || operador === '*' || operador === '/') {
        resultado = parseFloat(parteA.replace(/,/g, '.')) + parseFloat(parteB.replace(/,/g, '.'))
    }
    document.calcform.visor.value = resultado.toLocaleString('pt-BR');
}