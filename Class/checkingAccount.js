"use strict";

/**
 * A Bank Account class
 * 
 * Extends the basic Account class, adds interest functionality
 * SavingsAccount should have an interest variable, which is set in the 
 * constructor and has a getter and a setter mehtod. It should also have an 
 * addInterest() method which deposits the interest amount into the account. 
 * The calculation for the amount is balance * interest / 100 .
 */
class CheckingAccount extends Account{
    /**
     * Constructor for creating a new Checking Account object
     * 
     * @param {number} number the number for this account
     * @param {number} drft is the overdraft amount
     */
    constructor(number, drft) {
        super(number);
        this._overDraft = drft;
    }

    /**
     * @returns {number} the interest rate
     */
    getOverdraft(){
        return this._overDraft;
    }

    /**
     * 
     * @param {number} newInterest is the new Interest rate
     * @returns {undefined} resets the interest property
     */
    setOverdraft(newOverdraft){
        this._overDraft = newOverdraft;
    }



    }

    const testSavingsAcc = new SavingsAccount(1234, 3);
    console.log("interest rate is: ", testSavingsAcc.getInterest());
    testSavingsAcc.deposit(1000);
    console.log("balance should be 1000: ", testSavingsAcc.getBalance());
    console.log(testSavingsAcc);