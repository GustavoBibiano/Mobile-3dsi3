namespace hospital{
    export class Pessoa{
        //informações da classe
        private nome:string | undefined;
        private cpf:string | undefined;

        getCpf() :string | undefined{
            return this.cpf;
        }

        setCpf(cpf:string):void{
            this.cpf = cpf;
        }

        //mostra o valor
        getNome():string | undefined{
            return this.nome;
        }

        //altera o valor
        setNome(nome:string):void{
            this.nome = nome;
        }

       
    }
}