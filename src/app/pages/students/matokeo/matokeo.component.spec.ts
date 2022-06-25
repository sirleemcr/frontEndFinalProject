import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatokeoComponent } from './matokeo.component';

describe('MatokeoComponent', () => {
  let component: MatokeoComponent;
  let fixture: ComponentFixture<MatokeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatokeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatokeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
