namespace hospital{
    export class Hospital{
        private nomeHospital:string | undefined;
        private enfermeiros:Array<Enfermeiro> = [];
        private medicos:Array<Medico> = [];
        private pacientes: Array<Paciente> = [];

        getNomeHospital():string{
            return this.nomeHospital;
        }

        setNomeHospital(nome:string):void{
            this.nomeHospital = nome;
        }

        addEnfermeiro(enfermeiro:Enfermeiro):void{
            this.enfermeiros.push(enfermeiro);
        }

        getEnfermeiros(){
            return this.enfermeiros;
        }

        addMedico(medico:Medico):void{
            this.medicos.push(medico);
        }

        getMedicos(){
            return this.medicos;
        }

        addPaciente(paciente:Paciente):void{
            this.pacientes.push(paciente);
        }

        getPacientes(){
            return this.pacientes;
        }
    }
}