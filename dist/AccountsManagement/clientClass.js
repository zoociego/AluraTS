"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkingAccount_1 = require("./checkingAccount");
var saveAccountClass_1 = require("./saveAccountClass");
var client = /** @class */ (function () {
    function client(theName, theLastname, theNid, theAge, theLocation) {
        this.name = theName;
        this.lastname = theLastname;
        this.nid = theNid;
        this.age = theAge;
        this.location = theLocation;
        this.account = new checkingAccount_1.default('This client dont have this account', 0, 0, 'No bank', 0);
        this.saveAccount = new saveAccountClass_1.default('This client dont have this account', 0, 0, 'No bank', 0);
    }
    ;
    client.prototype.createCheckingAccount = function (client, numberAccount, agency, check) {
        return this.account = new checkingAccount_1.default('Checking Account', client, numberAccount, agency, check);
    };
    ;
    client.prototype.createSaveAccount = function (client, numberAccount, agency, check) {
        return this.saveAccount = new saveAccountClass_1.default('Save Account', client, numberAccount, agency, check);
    };
    return client;
}());
exports.default = client;
