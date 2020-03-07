"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hospital;
(function (hospital) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente(nome, cpf, cod) {
            var _this = _super.call(this, nome, cpf) || this;
            _this.codPaciente = cod;
            return _this;
        }
        Paciente.prototype.getCodCliente = function () {
            return this.codPaciente;
        };
        Paciente.prototype.setCodCliente = function (codPaciente) {
            this.codPaciente = codPaciente;
        };
        return Paciente;
    }(hospital.Pessoa));
    hospital.Paciente = Paciente;
})(hospital || (hospital = {}));
