import Account from './AccountClass';

class saveAccount extends Account { 
    constructor(
        theType         : string,
        theClient       : number,
        theNumberAccount: number,
        theAgency       : string,
        theSaveCheck    : number
    ) {
        super(theType, theClient, theNumberAccount, theAgency, theSaveCheck)
    };
};

export default saveAccount;