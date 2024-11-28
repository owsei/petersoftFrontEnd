import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightGraphicComponent } from './weight-graphic.component';

describe('WeightGraphicComponent', () => {
  let component: WeightGraphicComponent;
  let fixture: ComponentFixture<WeightGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
