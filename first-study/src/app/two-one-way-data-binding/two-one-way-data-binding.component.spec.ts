import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoOneWayDataBindingComponent } from './two-one-way-data-binding.component';

describe('TwoOneWayDataBindingComponent', () => {
  let component: TwoOneWayDataBindingComponent;
  let fixture: ComponentFixture<TwoOneWayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoOneWayDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoOneWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
