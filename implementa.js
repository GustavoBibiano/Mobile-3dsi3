"use strict";
var hospital;
(function (hospital_1) {
    //Instanciando Hospital
    var hospital = new hospital_1.Hospital;
    hospital.setNomeHospital('Hospital Santo Amaro');
    var medicos = new Array();
    for (var i = 0; i < 3; i++) {
        medicos[i] = new hospital_1.Medico;
    }
    medicos[0].setNome('Dr Lucas');
    medicos[0].setCpf('33463464878');
    medicos[0].setCodFuncionario(0);
    medicos[0].setCrm(123);
    medicos[0].setEspecialidade('Pediatra');
    medicos[1].setNome('Dr Matheus');
    medicos[1].setCpf('04547050729');
    medicos[1].setCodFuncionario(1);
    medicos[1].setCrm(124);
    medicos[1].setEspecialidade('Cirurgião');
    medicos[2].setNome('Dr Aline');
    medicos[2].setCpf('22563264729');
    medicos[2].setCodFuncionario(2);
    medicos[2].setCrm(111);
    medicos[2].setEspecialidade('Pediatra');
    var enfermeiros = new Array();
    for (var i = 0; i < 3; i++) {
        enfermeiros[i] = new hospital_1.Enfermeiro;
    }
    enfermeiros[0].setNome('Manoela');
    enfermeiros[0].setCpf('22532151749');
    enfermeiros[0].setCodFuncionario(354);
    enfermeiros[0].setCoren(3214);
    enfermeiros[1].setNome('Bruna');
    enfermeiros[1].setCpf('33532148719');
    enfermeiros[1].setCodFuncionario(321);
    enfermeiros[1].setCoren(3215);
    enfermeiros[2].setNome('Gabriel');
    enfermeiros[2].setCpf('22432124947');
    enfermeiros[2].setCodFuncionario(432);
    enfermeiros[2].setCoren(3216);
    var pacientes = new Array();
    for (var i = 0; i < 3; i++) {
        pacientes[i] = new hospital_1.Paciente;
    }
    pacientes[0].setNome('Bernadete');
    pacientes[0].setCpf('04747050817');
    pacientes[0].setCodPaciente(333);
    pacientes[1].setNome('Cristina');
    pacientes[1].setCpf('33563547819');
    pacientes[1].setCodPaciente(555);
    pacientes[2].setNome('Cristinao');
    pacientes[2].setCpf('22465463849');
    pacientes[2].setCodPaciente(777);
    //Adicionando os objetos na classe Hospital
    medicos.forEach(function (medico) {
        hospital.addMedico(medico);
    });
    enfermeiros.forEach(function (enfermeiro) {
        hospital.addEnfermeiro(enfermeiro);
    });
    pacientes.forEach(function (paciente) {
        hospital.addPaciente(paciente);
    });
    //Mostrando Dados do Hospital em "index.html"
    var nomeHospital = document.getElementById('nomeHospital');
    nomeHospital.textContent = hospital.getNomeHospital();
    var tabelaMedicos = document.getElementById('tabelaMedicos');
    hospital.getMedicos().forEach(function (medico) {
        var html = "\n        <tr>\n            <th scope=\"row\">" + medico.getCodFuncionario() + "</th>\n            <td>" + medico.getNome() + "</td>\n            <td>" + medico.getCpf() + "</td>\n            <td>" + medico.getCrm() + "</td>\n            <td>" + medico.getEspecialidade() + "</td>\n        </tr>\n        ";
        tabelaMedicos.innerHTML += html;
    });
    var tabelaEnfermeiros = document.getElementById('tabelaEnfermeiros');
    hospital.getEnfermeiros().forEach(function (enfermeiros) {
        var html = "\n        <tr>\n            <th scope=\"row\">" + enfermeiros.getCodFuncionario() + "</th>\n            <td>" + enfermeiros.getNome() + "</td>\n            <td>" + enfermeiros.getCpf() + "</td>\n            <td>" + enfermeiros.getCoren() + "</td>\n        </tr>\n        ";
        tabelaEnfermeiros.innerHTML += html;
    });
    var tabelaPacientes = document.getElementById('tabelaPacientes');
    hospital.getPacientes().forEach(function (pacientes) {
        var html = "\n        <tr>\n            <th scope=\"row\">" + pacientes.getCodPaciente() + "</th>\n            <td>" + pacientes.getNome() + "</td>\n            <td>" + pacientes.getCpf() + "</td>\n        </tr>\n        ";
        tabelaPacientes.innerHTML += html;
    });
})(hospital || (hospital = {}));
