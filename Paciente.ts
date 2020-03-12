namespace hospital{
    export class Paciente extends Pessoa{
        //informações da classe
        private codPaciente:number |undefined;
        

        getCodPaciente():number|undefined{
           return this.codPaciente;
       }

        setCodPaciente(codPaciente:number):void{
           this.codPaciente = codPaciente;
       }
        
    }
}