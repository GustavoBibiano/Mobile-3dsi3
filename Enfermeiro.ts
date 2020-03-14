namespace hospital{
    export class Enfermeiro extends Funcionario{
        private coren: number|undefined;

        getCoren(): number|undefined{
            return this.coren;
        }

        setCoren(coren:number):void{
            this.coren = coren;
        }

    }
}