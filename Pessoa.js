"use strict";
var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this.cpf = cpf;
        };
        //mostra o valor
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        //altera o valor
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
