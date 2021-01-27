import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaSideNavComponent } from './pa-side-nav.component';

describe('PaSideNavComponent', () => {
  let component: PaSideNavComponent;
  let fixture: ComponentFixture<PaSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
