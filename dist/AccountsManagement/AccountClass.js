"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taxes;
(function (taxes) {
    taxes.saveAccountTax = function (value) {
        return value * 1.05;
    };
    taxes.checkAccountTax = function (value) {
        return value * 1.02;
    };
})(taxes || (taxes = {}));
var Account = /** @class */ (function () {
    function Account(theType, theClient, theNumberAccount, theAgency, theCheck) {
        this.type = theType;
        this.client = theClient;
        this.numberAccount = theNumberAccount;
        this.agency = theAgency;
        this.check = theCheck;
    }
    ;
    Account.prototype.deposit = function (value) {
        if (value > 0) {
            return this.check += value;
        }
        ;
        throw new Error('insufficient funds');
    };
    ;
    Account.prototype.checkAccount = function () {
        return console.log(this.check);
    };
    ;
    Account.prototype.withdraw = function (value) {
        if (value <= this.check) {
            value = this.type === 'Checking Account' ?
                taxes.checkAccountTax(value) :
                taxes.saveAccountTax(value);
            return this.check -= value;
        }
        throw new Error('insufficient funds');
    };
    ;
    return Account;
}());
;
exports.default = Account;
