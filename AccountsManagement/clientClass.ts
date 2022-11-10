import checkingAccount from "./checkingAccount";
import saveAccount from './saveAccountClass';

class client {
    name        : string; 
    lastname    : string; 
    nid         : number;
    age         : number;
    location    : string; 
    account     : checkingAccount;
    saveAccount : saveAccount;

    constructor(
        theName     : string,
        theLastname : string,
        theNid      : number,
        theAge      : number,
        theLocation : string
    ) {
        this.name        = theName;
        this.lastname    = theLastname;
        this.nid         = theNid;
        this.age         = theAge
        this.location    = theLocation   
        this.account     = new checkingAccount('This client dont have this account', 0, 0, 'No bank', 0)
        this.saveAccount = new saveAccount('This client dont have this account', 0, 0, 'No bank', 0)
    };
    
    createCheckingAccount(
        client: number, 
        numberAccount: number, 
        agency: string, 
        check:number
    ): checkingAccount {
        return this.account = new checkingAccount('Checking Account', client, numberAccount, agency, check);
    };

    createSaveAccount(
        client: number, 
        numberAccount: number, 
        agency: string, 
        check:number
    ): saveAccount {
        return this.saveAccount = new saveAccount('Save Account', client, numberAccount, agency, check);
    }
}


export default client;