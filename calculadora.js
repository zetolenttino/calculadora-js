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
    } else if (texto === '+' || texto === '-' || texto === '*' || texto === '/') {
        operador = texto
        document.calcform.visor.value = ''
        }
    }


function limparCampo() {
    document.calcform.visor.value = '';
    parteB = undefined
    parteA = undefined
    operador = undefined
}

function calcParse() {
    let resultado
    if (operador === '+'){
        resultado = parseFloat(parteA.replace(/,/g, '.')) + parseFloat(parteB.replace(/,/g, '.'))
    }else if (operador === '-'){
        resultado = parseFloat(parteA.replace(/,/g, '.')) - parseFloat(parteB.replace(/,/g, '.'))
    }else if (operador === '*'){
        resultado = parseFloat(parteA.replace(/,/g, '.')) / parseFloat(parteB.replace(/,/g, '.'))
    }else if (operador === '/'){
        resultado = parseFloat(parteA.replace(/,/g, '.')) * parseFloat(parteB.replace(/,/g, '.'))
    }

    document.calcform.visor.value = resultado.toLocaleString('pt-BR');
  
}