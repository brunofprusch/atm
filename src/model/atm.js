const moneyBills = [100, 50, 20, 10];

const withdrawal = (withdrawalValue) => {
    if (!isValidNumber(withdrawalValue)) {
        return { status:'ERROR', value: 0};
    }

}
const isValidNumber = function (withdrawalValue) {
    return withdrawalValue % 10 === 0;
}

module.exports = {
    withdrawal
}