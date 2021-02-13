import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Educates } from 'src/app/models/educates';
import { Takes } from 'src/app/models/takes';
import { CourseService } from 'src/app/services/course.service';
import { EducatesService } from 'src/app/services/educates.service';
import { TakesService } from 'src/app/services/takes.service';

@Component({
  selector: 'app-subject-admission',
  templateUrl: './subject-admission.component.html',
  styleUrls: ['./subject-admission.component.css']
})
export class SubjectAdmissionComponent {

  tableData;
  dataSource;
  displayedColumns: string[];

  constructor(private readonly courseService: CourseService,
    private readonly takes: TakesService,
    private readonly educateService: EducatesService,
    private readonly authService: AuthService) {
    this.buildTable();

  }

  buildTable() {
    this.courseService.getCourses().subscribe((resData) => {
      this.displayedColumns = Object.keys(resData[0]);
      this.displayedColumns.push("edit");
      this.tableData = resData;
      this.dataSource = new MatTableDataSource(this.tableData);

    });
  }

  takeOrEducate(course_code) {
    if (this.authService.isStudent()) {
      this.addTake(course_code);
    } else {
      this.addEducate(course_code);
    }
  }

  addTake(course_code) {
    const take = new Takes(localStorage.getItem("userId"), course_code);
    this.takes.createTake(take).subscribe();
  }

  addEducate(course_code) {
    const educate = new Educates(localStorage.getItem("userId"), course_code);
    this.educateService.createEducate(educate).subscribe();
  }
}
