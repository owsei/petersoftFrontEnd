import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertWeightComponent } from './insert-weight.component';

describe('InsertWeightComponent', () => {
  let component: InsertWeightComponent;
  let fixture: ComponentFixture<InsertWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertWeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
