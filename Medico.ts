namespace hospital{
    export class Medico extends Funcionario{
        private crm: number | undefined;
        private especialidade: string | undefined;
        

        getCrm(): number{
            return this.crm;
        }

        setCrm(crm:number):void{
            this.crm = crm;
        }

         getEspecialidade(): string{
            return this.especialidade;
        }

        setEspecialidade(especialidade:string):void{
            this.especialidade = especialidade;
        }

    }
}