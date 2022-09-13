function Soma() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();
    $.ajax({
        url: "/Calculadora/Soma",
        data: {
            valor1: valor1,
            valor2: valor2
        },
    }).done(function (response) {
        $('#total').val(response);
    });
}
function Subtracao() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();
    $.ajax({
        url: "/Calculadora/Subtracao",
        data: {
            valor1: valor1,
            valor2: valor2
        },
    }).done(function (response) {
        $('#total').val(response);
    });
}
function Multiplicacao() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();
    $.ajax({
        url: "/Calculadora/Multiplicacao",
        data: {
            valor1: valor1,
            valor2: valor2
        },
    }).done(function (response) {
        $('#total').val(response);
    });
}
function Divisao() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();
    $.ajax({
        url: "/Calculadora/Divisao",
        data: {
            valor1: valor1,
            valor2: valor2
        },
    }).done(function (response) {
        $('#total').val(response);
    });
}

