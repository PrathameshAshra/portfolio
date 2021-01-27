import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaPricingComponent } from './pa-pricing.component';

describe('PaPricingComponent', () => {
  let component: PaPricingComponent;
  let fixture: ComponentFixture<PaPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
