import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAdmissionComponent } from './subject-admission.component';

describe('SubjectAdmissionComponent', () => {
  let component: SubjectAdmissionComponent;
  let fixture: ComponentFixture<SubjectAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
