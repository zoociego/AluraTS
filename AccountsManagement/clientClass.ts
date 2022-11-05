import checkingAccount from "./checkingAccount";
import saveAccount from './saveAccountClass';

class client {
    name        : string; 
    lastname    : string; 
    nid         : number; 
    account     : checkingAccount;
    saveAccount : saveAccount;

    constructor(
        theName     : string,
        theLastname : string,
        theNid      : number,
    ) {
        this.name        = theName;
        this.lastname    = theLastname;
        this.nid         = theNid;
        this.account     = new checkingAccount('This client dont have this account', 0, 0, 'No bank', 0)
        this.saveAccount = new saveAccount('This client dont have this account', 0, 0, 'No bank', 0)
    };
    
    createCheckingAccount(
        client: number, 
        numberAccount: number, 
        agency: string, 
        check:number
    ) {
        return this.account = new checkingAccount('Checking Account', client, numberAccount, agency, check);
    };

    createSaveAccount(
        client: number, 
        numberAccount: number, 
        agency: string, 
        check:number
    ) {
        return this.saveAccount = new saveAccount('Save Account', client, numberAccount, agency, check);
    }
}

export default client;