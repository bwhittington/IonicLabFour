import { Injectable } from '@angular/core';

@Injectable()
export class LoanCalculatorService {

    public calculateCompoundInterest(principle: number, interestRate: number, loanLength: number): any {
        let amount: number = principle * Math.pow((1 + (interestRate / 365)), loanLength)
        return amount;
    }
}
