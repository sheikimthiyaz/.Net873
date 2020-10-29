import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATATYPEComponent } from './datatype.component';

describe('DATATYPEComponent', () => {
  let component: DATATYPEComponent;
  let fixture: ComponentFixture<DATATYPEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DATATYPEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DATATYPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
