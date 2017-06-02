import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { PercentageValidator } from '../../validators/percentage';

@Component({
    selector: 'loan-calculator',
    templateUrl: 'loan-calculator.html'
})

export class LoanCalculator {

    @ViewChild('loanCalculatorSlider') loanCalculatorSlider: any;

    slideCalculatorForm: FormGroup;
    submitAttempt: boolean = false;

    public navCtrl: NavController;
    public formBuilder: FormBuilder

    constructor(navCtrl: NavController, formBuilder: FormBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;

        this.slideCalculatorForm = this.formBuilder.group({
            principal: ['', Validators.required],
            annualInterestRate: ['', Validators.compose([PercentageValidator.IsValid, Validators.required])],
            loanLength: ['', Validators.required],
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
            console.log("success!")
            console.log(this.slideCalculatorForm.value);
        }
    }

}