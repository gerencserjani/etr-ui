import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDataComponent } from './education-data.component';

describe('EducationDataComponent', () => {
  let component: EducationDataComponent;
  let fixture: ComponentFixture<EducationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
