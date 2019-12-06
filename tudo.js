var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        //metodos são as ações da classe
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            if (nome != "") {
                this._nome = nome;
            }
        };
        Pessoa.prototype.getIdade = function () {
            return this._nome;
        };
        Pessoa.prototype.setIdade = function (idade) {
            this._idade = idade;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
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
