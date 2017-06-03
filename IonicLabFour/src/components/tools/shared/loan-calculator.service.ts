import { Injectable } from '@angular/core';

import { PaymentAmortizationModel } from '../shared/payment-amortization.model';

@Injectable()
export class LoanCalculatorService {

    public calculateCompoundInterest(principle: number, interestRate: number, loanLength: number): any {
        let schedule: Array<PaymentAmortizationModel> = new Array<PaymentAmortizationModel>();

        return schedule;
    }

    public parse(numberToParse: number): number {
        let parsedNumber: number;
        parsedNumber = Math.round(numberToParse * Math.pow(10, 2)) / Math.pow(10, 2);
        return parsedNumber;
    };
}
