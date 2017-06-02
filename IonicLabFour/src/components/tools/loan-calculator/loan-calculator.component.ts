﻿import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { PercentageValidator } from '../../../validators/percentage';
import { LoanCalculatorService } from '../shared/loan-calculator.service';

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
    public loanCalculatorService: LoanCalculatorService;

    constructor(navCtrl: NavController, formBuilder: FormBuilder, loanCalculatorService: LoanCalculatorService,) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;

        this.slideCalculatorForm = this.formBuilder.group({
            principal: ['', Validators.required],
            annualInterestRate: ['', PercentageValidator.isValid],
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

            this.loanCalculatorService.calculateCompoundInterest(this.slideCalculatorForm.controls.principal.value, this.slideCalculatorForm.controls.annualInterestRate.value, this.slideCalculatorForm.controls.loanLength.value)
        }
    }

}