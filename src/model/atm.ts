import AtmReturn from './atmReturn';

const AVAILABLE_MONEY_BILLS = [100, 50, 20, 10];
const AVAILABLE_MONEY_MIN_VALUE = Math.min(...AVAILABLE_MONEY_BILLS);

const withdrawal = (requiredValue: number): AtmReturn => {
    if (!isValidNumber(requiredValue)) {
        return new AtmReturn([{
            moneyBill: 0, 
            quantity: 0
        }]);
    }
    const moneyBillReturned = getMoneyBills(requiredValue);
    return new AtmReturn(moneyBillReturned);
}

function getMoneyBills(requiredValue: number, moneyBillReturned: ReturnedBills[] = []): ReturnedBills[]  {

    let response: ReturnedBills;
    AVAILABLE_MONEY_BILLS.some((bill) => {
        const result =  Math.trunc(requiredValue / bill);
        if (result > 0) {
            response = {
                moneyBill: bill, 
                quantity: result
            }

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

function isValidNumber(requiredValue): boolean {
    return requiredValue !== 0 && requiredValue % AVAILABLE_MONEY_MIN_VALUE === 0;
}

export default withdrawal;