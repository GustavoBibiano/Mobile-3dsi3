namespace hospital{
    export class Enfermeiro extends Funcionario{
        private coren: number;

        getCoren(): number{
            return this.coren;
        }

        setCoren(coren:number):void{
            this.coren = coren;
        }

    }
}