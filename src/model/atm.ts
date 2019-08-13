import AtmReturn from './atmReturn';

const availableMoneyBills = [100, 50, 20, 10];

const withdrawal = (requiredValue: number): AtmReturn => {
    if (!isValidNumber(requiredValue)) {
        return new AtmReturn([], 'Invalid value for withdrawal');
    }
    let moneyBillReturned = getMoneyBills(requiredValue);
    return new AtmReturn(moneyBillReturned);
}

function getMoneyBills(requiredValue: number, moneyBillReturned: number[] = []): number[]  {

    let response: any;
    availableMoneyBills.some((bill) => {
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

function isValidNumber(requiredValue): boolean {
    return requiredValue % 10 === 0;
}

export default withdrawal;