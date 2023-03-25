import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelFloatingComponent } from './label-floating.component';

describe('LabelFloatingComponent', () => {
  let component: LabelFloatingComponent;
  let fixture: ComponentFixture<LabelFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelFloatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
