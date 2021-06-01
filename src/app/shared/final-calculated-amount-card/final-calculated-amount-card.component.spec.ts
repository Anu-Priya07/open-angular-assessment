import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCalculatedAmountCardComponent } from './final-calculated-amount-card.component';

describe('FinalCalculatedAmountCardComponent', () => {
  let component: FinalCalculatedAmountCardComponent;
  let fixture: ComponentFixture<FinalCalculatedAmountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCalculatedAmountCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCalculatedAmountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
