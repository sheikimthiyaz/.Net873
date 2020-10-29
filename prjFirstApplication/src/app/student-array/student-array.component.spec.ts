import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentArrayComponent } from './student-array.component';

describe('StudentArrayComponent', () => {
  let component: StudentArrayComponent;
  let fixture: ComponentFixture<StudentArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
