///<reference path="pessoa.ts"/>
var empresa;
(function (empresa) {
    //instancia de classe
    var p = new empresa.Pessoa();
    p.setNome("Gustavo");
    p.setIdade(18);
    p.setCpf("000.000.000-00");
    document.getElementById("nome").textContent = p.getNome();
})(empresa || (empresa = {}));
