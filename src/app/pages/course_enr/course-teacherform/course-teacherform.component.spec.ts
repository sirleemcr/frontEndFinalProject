import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTeacherformComponent } from './course-teacherform.component';

describe('CourseTeacherformComponent', () => {
  let component: CourseTeacherformComponent;
  let fixture: ComponentFixture<CourseTeacherformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTeacherformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTeacherformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
