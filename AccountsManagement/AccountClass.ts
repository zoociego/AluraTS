namespace taxes {
    export const saveAccountTax = ( value: number ) :number => {
        return value * 1.05
    }
    export const checkAccountTax = ( value: number ) :number => {
        return value * 1.02
    }
}
class Account {
    type            :string; 
    private client  :number;
    numberAccount   :number;
    agency          :string;
    protected check :number;

    constructor(
        theType         : string,
        theClient       : number,
        theNumberAccount: number,
        theAgency       : string,
        theCheck        : number
    ) {
        this.type          = theType 
        this.client        = theClient;
        this.numberAccount = theNumberAccount;
        this.agency        = theAgency;
        this.check         = theCheck;
    };
    deposit(value: number): number {
        if(value > 0) {
            return this.check += value
        };

        throw new Error('insufficient funds')
    };
    checkAccount() {
        return console.log(this.check);
    };
    withdraw(value: number): number {
        if(value <= this.check) {
            this.type === 'Checking Account' ?
                value = taxes.checkAccountTax(value) :
                value
            return this.check -= value;
        }
        throw new Error('insufficient funds')
    };
};

export default Account;