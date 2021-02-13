import { EducatesService } from './../../services/educates.service';
import { CourseService } from 'src/app/services/course.service';
import { TakesService } from 'src/app/services/takes.service';
import { AuthService } from './../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { normalize } from 'path';
import { User } from 'src/app/models/user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-education-data',
  templateUrl: './education-data.component.html',
  styleUrls: ['./education-data.component.css']
})
export class EducationDataComponent implements OnInit {

  updateForm = new FormGroup({
    fname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });


  tableData;
  dataSource;
  displayedColumns: string[];

  course_codes = [];

  user: any;

  isEditMode = false;

  constructor(private readonly userService: UserService, public readonly auth: AuthService,
    private readonly take: TakesService,
    private readonly courseService: CourseService,
    private readonly educates: EducatesService,
  ) {
    //this.buildTable();
  }

  ngOnInit(): void {
    this.getUser(localStorage.getItem("userId"));

    this.buildTable();
  }

  buildTable() {

    if (this.auth.isStudent()) {
      this.userService.getTakeCourses().subscribe((data) => {
        this.displayedColumns = ["course_code", "name", "creditNumber"];
        this.displayedColumns.push("edit");
        this.tableData = data;
        this.dataSource = new MatTableDataSource(this.tableData);
      });
    } else if (this.auth.isTeacher()) {
      this.userService.getEducateCourses().subscribe((data) => {
        this.displayedColumns = ["course_code", "name", "creditNumber"];
        this.displayedColumns.push("edit");
        this.tableData = data;
        this.dataSource = new MatTableDataSource(this.tableData);
      });
    }
  }


  disapply(id) {
    if (this.auth.isStudent()) {
      this.take.deleteTake(localStorage.getItem("userId"), id).subscribe(() => { this.buildTable(); });

    } else if (this.auth.isTeacher()) {
      this.educates.deleteEducate(localStorage.getItem("userId"), id).subscribe(() => { this.buildTable(); });
    }
  }

  onSubmit(formValue) {
    console.warn(this.updateForm.value);
    this.isEditMode = false;
    this.update(this.updateForm.value.fname, this.updateForm.value.email, this.updateForm.value.password);
  }

  update(fullName, email, password) {
    const user = new User(fullName, email, password);
    this.userService.upDateUser(user, localStorage.getItem("userId")).subscribe();
  }


  getUser(id) {
    this.userService.getUser(id).subscribe((user) => {
      this.user = user[0];
      this.updateForm.patchValue({ fname: this.user.fullName, email: this.user.email, password: this.user.password });
    });
  }



}
