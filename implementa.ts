namespace hospital{
    //Instanciando Hospital
    
    let hospital = new Hospital;
    hospital.setNomeHospital('Hospital Santo Amaro');

    let medicos = new Array<Medico>();
    for(let i = 0 ; i < 3 ; i++){
        medicos[i] = new Medico;
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

    let enfermeiros = new Array<Enfermeiro>();
    for(let i = 0 ; i < 3 ; i++){
        enfermeiros[i] = new Enfermeiro;
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

    let pacientes = new Array<Paciente>();
    for(let i = 0 ; i < 3 ; i++){
        pacientes[i] = new Paciente;
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

    medicos.forEach( medico => {
        hospital.addMedico(medico);
    });

    enfermeiros.forEach( enfermeiro => {
        hospital.addEnfermeiro(enfermeiro);
    });

    
    pacientes.forEach( paciente => {
        hospital.addPaciente(paciente);
    });
    
    let nomeHospital = document.getElementById('nomeHospital');
    nomeHospital.textContent = hospital.getNomeHospital();

    let tbMedicos = document.getElementById('tbMedicos');
    hospital.getMedicos().forEach( medico => {
        let html = `
        <tr>
            <th scope="row">${medico.getCodFuncionario()}</th>
            <td>${medico.getNome()}</td>
            <td>${medico.getCpf()}</td>
            <td>${medico.getCrm()}</td>
            <td>${medico.getEspecialidade()}</td>
        </tr>
        `;
        tbMedicos.innerHTML += html;
    });

    let tbEnfermeiros = document.getElementById('tbEnfermeiros');
        hospital.getEnfermeiros().forEach( enfermeiros => {
        let html = `
        <tr>
            <th scope="row">${enfermeiros.getCodFuncionario()}</th>
            <td>${enfermeiros.getNome()}</td>
            <td>${enfermeiros.getCpf()}</td>
            <td>${enfermeiros.getCoren()}</td>
        </tr>
        `;
        tbEnfermeiros.innerHTML += html;
    });

    let tbPacientes = document.getElementById('tbPacientes');
        hospital.getPacientes().forEach( pacientes => {
        let html = `
        <tr>
            <th scope="row">${pacientes.getCodPaciente()}</th>
            <td>${pacientes.getNome()}</td>
            <td>${pacientes.getCpf()}</td>
        </tr>
        `;
        tbPacientes.innerHTML += html;
    });
}