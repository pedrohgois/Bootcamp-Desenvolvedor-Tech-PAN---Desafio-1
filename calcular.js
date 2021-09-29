var valor = document.getElementById("valor");
var prazo = document.getElementById("prazo");
var juros = document.getElementById("juros");
var tbody = document.querySelector("tbody");

function calcular() {
    var total = valor.valueAsNumber;
    var meses = prazo.valueAsNumber * 12;
    var jurosAA = juros.valueAsNumber;
    var jurosAM = ((1 + jurosAA) ** (1 / 12) - 1).toFixed(6);
    var amortizacao = total / meses;
    document.getElementById("meses").valueAsNumber = meses;
    document.getElementById("jurosam").valueAsNumber = jurosAM;

    for (var i = 0; i < 5; i++) {
        var saldoDevedor = total - i * amortizacao;
        var jurosP = saldoDevedor * jurosAM;
        var tr = tbody.children[i];
        tr.children[1].textContent = amortizacao.toLocaleString('pt-BR', { style:'currency', currency: 'BRL'});
        tr.children[2].textContent = jurosP.toLocaleString('pt-BR', { style:'currency', currency: 'BRL'});
        tr.children[3].textContent = (amortizacao + jurosP).toLocaleString('pt-BR', { style:'currency', currency: 'BRL'});
    }

    var totalj = 0;
    for (var i = 0; i < meses; i++) {
        var saldoDevedor = total - i * amortizacao;
        var jurosP = saldoDevedor * jurosAM;
        totalj += jurosP;
    }
    document.getElementById("total").value = totalj.toFixed(2);
}

calcular();