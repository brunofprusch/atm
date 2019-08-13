export default class AtmReturn {

    isSuccess: boolean;
    message: string;
    moneyBills: number[];

    constructor(moneyBills: number[], message: string = '') {
        this.isSuccess = moneyBills.length > 0;
        this.moneyBills = moneyBills;
        this.message = message;
    }
}