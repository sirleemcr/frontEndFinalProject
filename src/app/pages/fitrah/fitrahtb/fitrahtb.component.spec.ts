import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitrahtbComponent } from './fitrahtb.component';

describe('FitrahtbComponent', () => {
  let component: FitrahtbComponent;
  let fixture: ComponentFixture<FitrahtbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitrahtbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitrahtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
