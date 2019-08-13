import withdrawal from './model/atm';
import AtmReturn from './model/atmReturn';

const atmReturn: AtmReturn = withdrawal(0);
!atmReturn.isSuccess ? console.log(atmReturn.message) : console.log(atmReturn);