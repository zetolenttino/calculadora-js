/*function preencher(num) {
    if (typeof gvisor == 'undefined') {
        document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;

    gvisor = 1;
}

function limparCampo() {
    document.calcform.visor.value = '';
}

function calculoOperador(operador, valor1, valor2) {
    if (operador == 'soma') {
        var res = valor1 + valor2;
        //var res = parseFloat(valor1) + parseFloat(valor2);
    } else if (operador == 'subtracao') {
        var res = valor1 - valor2;
    } else if (operador == 'divisao') {
        var res = valor1 / valor2;
    } else if (operador == 'multiplicacao') {
        var res = valor1 * valor2;
    }

    return (res);
}

function calcParse(operador) {

    var valor = document.calcform.visor.value;
    delete gvisor;

    if (typeof goperador != 'undefined' && operador == 'resultado') {
        gres = calculoOperador(operador, gres, res);
        document.calcform.visor.value = gres;

        delete operador;
        delete gres;

        return (0);

    }

    if (typeof gvalor != 'undefined') {
        gres = calculoOperador(operador, gres, res);
        goperador = operador;
        document.calcform.visor.value = gres;

    } else {
        gres = res;
        goperador = operador;
    }
}*/

var valor;
var resultado;

function preencher(num) {
    valor = document.calcform.visor.value += num;
}

function limparCampo() {
    document.calcform.visor.value = '';
}

function calcParse() {
    resultado = eval(valor);
    document.calcform.visor.value = resultado.toLocaleString('pt-BR');
}