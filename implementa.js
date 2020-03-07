"use strict";
var hospital;
(function (hospital_1) {
    //Instanciando Hospital
    var hospital = new hospital_1.Hospital;
    hospital.setNome('Seito University Hospital');
    //Instanciando Médicos
    var medicos = new Array();
    for (var i = 0; i < 3; i++) {
        medicos[i] = new hospital_1.Medico;
    }
    medicos[0].setNome('Emu Hojo');
    medicos[0].setCPF('20160100018');
    medicos[0].setCodFuncionario(0);
    medicos[0].setCrm(4513);
    medicos[0].setEspecialidade('Residente - Pediatra e CR');
    medicos[1].setNome('Hiiro Kagami');
    medicos[1].setCPF('20160200018');
    medicos[1].setCodFuncionario(2);
    medicos[1].setCrm(457);
    medicos[1].setEspecialidade('Cirurgião e CR');
    medicos[2].setNome('Taiga Hanaya');
    medicos[2].setCPF('20160200018');
    medicos[2].setCodFuncionario(3);
    medicos[2].setCrm(4510);
    medicos[2].setEspecialidade('Radiologista e CR');
    //Instanciando Enfermeiros
    var enfermeiros = new Array();
    for (var i = 0; i < 3; i++) {
        enfermeiros[i] = new hospital_1.Enfermeiro;
    }
    enfermeiros[0].setNome('Asuna Karino');
    enfermeiros[0].setCPF('20160000118');
    enfermeiros[0].setCodFuncionario(1801);
    enfermeiros[0].setCoren(4510);
    enfermeiros[1].setNome('Mizuki Nishikikoji');
    enfermeiros[1].setCPF('20160000218');
    enfermeiros[1].setCodFuncionario(1802);
    enfermeiros[1].setCoren(4520);
    enfermeiros[2].setNome('Satsuki Ogimachi');
    enfermeiros[2].setCPF('20160000318');
    enfermeiros[2].setCodFuncionario(1803);
    enfermeiros[2].setCoren(4530);
    //Instanciando Pacientes
    var pacientes = new Array();
    for (var i = 0; i < 3; i++) {
        pacientes[i] = new hospital_1.Paciente;
    }
    pacientes[0].setNome('Saki Momose');
    pacientes[0].setCPF('20160010018');
    pacientes[0].setCodPaciente(111);
    pacientes[1].setNome('Nico Saiba');
    pacientes[1].setCPF('20160800018');
    pacientes[1].setCodPaciente(3614);
    pacientes[2].setNome('Takeru Tenkuji');
    pacientes[2].setCPF('20150100017');
    pacientes[2].setCodPaciente(5013);
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
    nomeHospital.textContent = hospital.getNome();
    var tabelaMedicos = document.getElementById('tabelaMedicos');
    hospital.getMedicos().forEach(function (medico) {
        var html = "\n        <tr>\n            <th scope=\"row\">" + medico.getCodFuncionario() + "</th>\n            <td>" + medico.getNome() + "</td>\n            <td>" + medico.getCPF() + "</td>\n            <td>" + medico.getCrm() + "</td>\n            <td>" + medico.getEspecialidade() + "</td>\n        </tr>\n        ";
        tabelaMedicos.innerHTML += html;
    });
    var tabelaEnfermeiros = document.getElementById('tabelaEnfermeiros');
    hospital.getEnfermeiros().forEach(function (enfermeiros) {
        var html = "\n        <tr>\n            <th scope=\"row\">" + enfermeiros.getCodFuncionario() + "</th>\n            <td>" + enfermeiros.getNome() + "</td>\n            <td>" + enfermeiros.getCPF() + "</td>\n            <td>" + enfermeiros.getCoren() + "</td>\n        </tr>\n        ";
        tabelaEnfermeiros.innerHTML += html;
    });
    var tabelaPacientes = document.getElementById('tabelaPacientes');
    hospital.getPacientes().forEach(function (pacientes) {
        var html = "\n        <tr>\n            <th scope=\"row\">" + pacientes.getCodPaciente() + "</th>\n            <td>" + pacientes.getNome() + "</td>\n            <td>" + pacientes.getCPF() + "</td>\n        </tr>\n        ";
        tabelaPacientes.innerHTML += html;
    });
})(hospital || (hospital = {}));
