namespace empresa{
    class Cliente{
        private _codCliente: number;
        private _credito: number;

        public getCodCliente(): number{
            return this._codCliente;
        }

        public setCodCliente(codigo: number): void{
            this._codCliente = codigo;
        }

        public getCredito(): number{
            return this._credito;
        }

        public setCredito(credito: number): void{
            this._credito = credito;
        }
    }
}