namespace empresa{
    export class Pessoa{
        //Atributos - Caracteristicas da classe
        private _nome: string;
        private _idade: number;
        private _cpf: string;

        //metodos são as ações da classe
        public getNome(): string{
            return this._nome;
        }

        public setNome(nome: string): void{
            if(nome != ""){
                this._nome = nome;
            }
           
        }

        public getIdade(): string{
            return this._nome;
        }

        public setIdade(idade: number): void{
            this._idade = idade;
        }

         public getCpf(): string{
            return this._cpf;
        }

        public setCpf(cpf: string): void{
            this._cpf = cpf;
        }

    }
  
}