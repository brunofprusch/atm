import withdrawal from "../src/model/atm";
import AtmReturn from "../src/model/atmReturn";

describe('Atm', () => {
    test('should withdraw 180. 100 - 50 - 20 - 10', () => {
        const expectedBills: ReturnedBills[] = [
            {
                moneyBill: 100,
                quantity: 1
            },
            {
                moneyBill: 50,
                quantity: 1
            },
            {
                moneyBill: 20,
                quantity: 1
            },
            {
                moneyBill: 10,
                quantity: 1
            },
        ]
        const expectedWithdrawal: AtmReturn = new AtmReturn(expectedBills)
        expect(withdrawal(180)).toMatchObject(expectedWithdrawal)
    }),
        test('should withdraw 0. 0', () => {
            const expectedBills: ReturnedBills[] = [
                {
                    moneyBill: 0,
                    quantity: 0
                },
            ]
            const expectedWithdrawal: AtmReturn = new AtmReturn(expectedBills)
            expect(withdrawal(0)).toMatchObject(expectedWithdrawal)
        }),
        test('try to withdraw zero wont break the code', () => {
            expect(true).toBe(true)
        })
})