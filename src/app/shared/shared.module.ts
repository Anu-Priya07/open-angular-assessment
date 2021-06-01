import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { FormsModule } from '@angular/forms';
import { FinalCalculatedAmountCardComponent } from './final-calculated-amount-card/final-calculated-amount-card.component';
import { BenefitCardComponent } from './benefit-card/benefit-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    EligibilityCalculatorComponent,
    FinalCalculatedAmountCardComponent,
    BenefitCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    HeaderComponent, 
    EligibilityCalculatorComponent, 
    FinalCalculatedAmountCardComponent,
    BenefitCardComponent
  ]
})
export class SharedModule { }
