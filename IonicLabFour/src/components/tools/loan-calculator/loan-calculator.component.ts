import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { PercentageValidator } from '../../../validators/percentage';
import { LoanCalculatorService } from '../shared/loan-calculator.service';
import { PaymentAmortizationModel } from '../shared/payment-amortization.model';

@Component({
    selector: 'loan-calculator',
    templateUrl: 'loan-calculator.html'
})

export class LoanCalculator {

    @ViewChild('loanCalculatorSlider') public loanCalculatorSlider: any;

    public slideCalculatorForm: FormGroup;
    public submitAttempt: boolean = false;

    public navCtrl: NavController;
    public formBuilder: FormBuilder;
    public loanCalculatorService: LoanCalculatorService;
    public amortizationSchedule: Array<PaymentAmortizationModel> = new Array<PaymentAmortizationModel>();

    constructor(navCtrl: NavController, formBuilder: FormBuilder ) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;

        this.slideCalculatorForm = this.formBuilder.group({

        });
    }

    public next(): void {
        this.loanCalculatorSlider.slideNext();
    }

    public prev(): void {
        this.loanCalculatorSlider.slidePrev();
    }

    public submit(): void {
        this.submitAttempt = true;

        if (!this.slideCalculatorForm.valid) {
            this.loanCalculatorSlider.slideTo(0);
        }
        else {
            console.log(this.slideCalculatorForm.value);
            this.submitAttempt = false;

            this.amortizationSchedule = this.loanCalculatorService.calculateCompoundInterest(0, 0, 0);
            this.loanCalculatorSlider.slideTo(1);
        }
    }

}