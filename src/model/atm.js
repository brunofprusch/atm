const AtmReturn = require('./atmReturn');

const moneyBills = [100, 50, 20, 10];

const withdrawal = (requiredValue) => {
    if (!isValidNumber(requiredValue)) {
        return new AtmReturn('ERROR', 0);
    }

    return getMoneyBills(requiredValue, []);
}

function getMoneyBills(requiredValue, moneyBillReturned) {

    let response;
    moneyBills.some((bill) => {
        let result =  Math.trunc(requiredValue / bill);
        if (result > 0) {
            response = {moneyBill: bill, quantity: result}
            return true;
        }
    });

    moneyBillReturned.push(response);

    let remainingAmount = requiredValue % response.moneyBill;
    if (remainingAmount > 0) {
        getMoneyBills(remainingAmount, moneyBillReturned);
    }

    return moneyBillReturned;
}

function isValidNumber(requiredValue) {
    return requiredValue % 10 === 0;
}

module.exports = {
    withdrawal
}