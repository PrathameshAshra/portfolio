import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaCardComponent } from './pa-card.component';

describe('PaCardComponent', () => {
  let component: PaCardComponent;
  let fixture: ComponentFixture<PaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
