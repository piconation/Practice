/**
 * Created by mattpowell on 4/26/16.
 */

function profile(name, savings, checking) {
    this.name = name;
    this.savings = savings;
    this.checking = checking;

    this.transfer(accountTo, accountFrom, amount);{}
}

//this.withdraw = function(amount) { };
//this.deposit = function(amount) { };

var Account = function (balance, accountNum) {
    this.balance = balance;
    this.accountNum = accountNum;

    this.withdraw = function(amount) { };
    this.deposit = function(amount) { };
};

var SavingsAcct = function (interestRate) {
    this.interestRate = interestRate;
};

var CheckingAcct = function (numOfChecks) {
    this.numOfChecks = numOfChecks;
};

function createProfile(name, checkingBalance, savingsBalance, numOfChecks, interestRate) {

    checkingAcct.prototype = Object.create(Account.prototype);

    var checkingAcct = new checkingAcct(numOfChecks);
    checkingAcct.balance = checkingBalance;
    checkingAcct.accountNum = 12345678;

    var savingsAcct = new savingsAcct(interestRate);
    savingsAcct.balance = savingsAcct;
    savingsAcct.accountNum = 23456789;


    var profile = new Profile(name, savingsAcct, checkingAcct);

    return profile;
}

