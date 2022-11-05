import Account from './AccountClass';

class checkingAccount extends Account { 
    constructor(
        theType         : string,
        theClient       : number,
        theNumberAccount: number,
        theAgency       : string,
        theCheck        : number
    ) {
        super(theType, theClient, theNumberAccount, theAgency, theCheck)
    };
};

export default checkingAccount;