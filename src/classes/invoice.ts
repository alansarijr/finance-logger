import { HasFormatter } from './../interfaces/HasFormatter';

export class InVoice implements HasFormatter{
    constructor(
        readonly client: string,
        private details:string,
        public amount: number,
        ){}
    
    format(){
        return `${this.client} owed $${this.amount} for ${this.details}`;
    }
}