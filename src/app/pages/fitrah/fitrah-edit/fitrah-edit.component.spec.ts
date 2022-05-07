import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitrahEditComponent } from './fitrah-edit.component';

describe('FitrahEditComponent', () => {
  let component: FitrahEditComponent;
  let fixture: ComponentFixture<FitrahEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitrahEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitrahEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
