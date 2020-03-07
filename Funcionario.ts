namespace hospital{
    export class Funcionario extends Pessoa{
        private codFuncionario: number;

        getCodFuncionario(): number{
            return this.codFuncionario;
        }

        setCodFuncionario(cod:number): void{
            this.codFuncionario = cod;
        }
    }
}