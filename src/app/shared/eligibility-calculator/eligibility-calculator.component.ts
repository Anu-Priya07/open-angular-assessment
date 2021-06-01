import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {

  monthlyIncome: any = 0;
  monthlyExpense: any = 0;
  existingLoanEmi: any;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeMonthlyIncomeInputRange() {
    let slider: any = document.getElementById("monthlyIncomeInputRange");

    const min = slider.min
    const max = slider.max
    const value = slider.value;

    slider.style = this.generateBackground(value, min, max);
  }

  onChangeMonthlyExpenseInputRange() {
    let slider: any = document.getElementById("monthlyExpenseInputRange");

    const min = slider.min
    const max = slider.max
    const value = slider.value;

    slider.style = this.generateBackground(value, min, max);
  }

  generateBackground(value,min,max) {   

    let percentage =  (value - min) / (max - min) * 100
    return 'background: linear-gradient(to right, #50299c, #663399 ' + percentage + '%, #f1f1f1 ' + percentage + '%, #f1f1f1 100%)'
  }

}
