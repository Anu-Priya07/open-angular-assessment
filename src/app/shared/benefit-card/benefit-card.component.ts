import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefit-card',
  templateUrl: './benefit-card.component.html',
  styleUrls: ['./benefit-card.component.css']
})
export class BenefitCardComponent implements OnInit {

  @Input() benefitLineItem;

  constructor() { }

  ngOnInit(): void {
  }

}
