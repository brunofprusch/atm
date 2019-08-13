export default class AtmReturn {

    isSuccess: boolean;
    message: string;
    moneyBills: ReturnedBills[];

    constructor(moneyBills: ReturnedBills[], message: string = '') {
        this.isSuccess = moneyBills.length > 0;
        this.moneyBills = moneyBills;
        this.message = message;
    }
}