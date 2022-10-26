import checkingAccount from "./checkingAccountClass";

class client {
    name    : string; 
    lastname: string; 
    nid     : number; 
    account : checkingAccount;

    constructor(
        theName     : string,
        theLastname : string,
        theNid      : number,
        theAccout   : checkingAccount
    ) {
        this.name       = theName;
        this.lastname   = theLastname;
        this.nid        = theNid;
        this.account    = theAccout
    };

    createCheckingAccount(client: number, numberAccount: number, agency: string, check:number) {
        return new checkingAccount(client, numberAccount, agency, check);
    };
}

export default client;