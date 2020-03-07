namespace hospital{
    export class Pessoa{
        //informações da classe
        private nome:string;
        private cpf:string;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }

        getCpf():string{
            return this.cpf;
        }

        setCpf(cpf:string):void{
            this.cpf = cpf;
        }

        //mostra o valor
        getNome():string{
            return this.nome;
        }

        //altera o valor
        setNome(nome:string):void{
            this.nome = nome;
        }

       
    }
}