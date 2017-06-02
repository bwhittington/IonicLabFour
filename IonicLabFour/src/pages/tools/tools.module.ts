import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ToolsPage } from './tools';
import { LoanCalculator } from '../../components/tools/loan-calculator/loan-calculator.component';
import { LoanCalculatorService } from '../../components/tools/shared/loan-calculator.service';

@NgModule({
    declarations: [
        ToolsPage,
        LoanCalculator
    ],
    imports: [
        IonicPageModule.forChild(ToolsPage)
    ],
    exports: [
        ToolsPage,
        LoanCalculator
    ],
    providers: [LoanCalculatorService]
})

export class ToolsPageModule { }