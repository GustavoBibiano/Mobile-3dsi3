namespace hospital{
    export class Paciente extends Pessoa{
        //informações da classe
        private codPaciente:number|undefined;

        constructor(nome:string, cpf:string, cod:number){
            super(nome,cpf);
            this.codPaciente = cod;
        }
        getCodCliente():number|undefined{
           return this.codPaciente;
       }

        setCodCliente(codPaciente:number):void{
           this.codPaciente = codPaciente;
       }
        
    }
}