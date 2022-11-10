namespace taxes {
    export const saveAccountTax = ( value: number ) :number => {
        return value * 1.05
    }
    export const checkAccountTax = ( value: number ) :number => {
        return value * 1.02
    }
}
class Account {
    readonly type       :string; 
    private client      :number;
    public numberAccount:number;
    agency              :string;
    protected check     :number;

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
           value =  this.type === 'Checking Account' ?
                taxes.checkAccountTax(value) :
                taxes.saveAccountTax(value)
            return this.check -= value;
        }
        throw new Error('insufficient funds')
    };
};

export default Account;