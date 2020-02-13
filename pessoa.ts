namespace empresa{
    class Pessoa{
        //informações da classe
        private nome:string;
        private cpf:string;
        private idade:number|undefined;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }

        getCpf():string{
            return this.cpf;
        }

        //mostra o valor
        getNome():string|undefined{
            return this.nome;
        }

        //altera o valor
        setNome(nome:string):void{
            this.nome = nome;
        }
        
        getIdade():number|undefined{
            return this.idade;
        }

        //altera o valor
        setIdade(idade:number):void{
            this.idade = idade;
        }
    }
}