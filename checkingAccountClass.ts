type clientTypeof           = string | null;
type accountNumberTypeof    = number | null;
class checkingAccount {
    client  :number;
    numberAccount   :accountNumberTypeof;
    agency          :clientTypeof;
    private check   :number;

    constructor(
        theClient       : number,
        theNumberAccount: number,
        theAgency       : string,
        theCheck        : number 
    ) {
        this.client        = theClient;
        this.numberAccount = theNumberAccount;
        this.agency        = theAgency;
        this.check         = theCheck;
    };
    deposit(value: number) {
        if(value > 0) {
            return this.check += value
        }

        throw new Error('insufficient funds')
    };
    checkAccount() {
        return this.check
    };
    withdraw(value: number) {
        if(value <= this.check) {
            return this.check -= value
        }
        throw new Error('insufficient funds')
    };
}

export default checkingAccount;