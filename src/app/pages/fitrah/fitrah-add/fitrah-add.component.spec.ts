import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitrahAddComponent } from './fitrah-add.component';

describe('FitrahAddComponent', () => {
  let component: FitrahAddComponent;
  let fixture: ComponentFixture<FitrahAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitrahAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitrahAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
