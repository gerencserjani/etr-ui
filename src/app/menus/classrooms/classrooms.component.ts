import { ClassroomsService } from './../../services/classrooms.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Classroom } from 'src/app/models/classroom';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {

  classroomForm = new FormGroup({
    roomName: new FormControl(''),
    roomNumber: new FormControl(''),
  });

  updateForm = new FormGroup({
    roomName: new FormControl(''),
    roomNumber: new FormControl(''),
  });

  isEditMode = false;

  tableData;
  dataSource;
  displayedColumns: string[];
  roomCode;

  constructor(private readonly classroomService: ClassroomsService) {
    this.buildTable();
  }

  ngOnInit(): void {
  }

  buildTable() {
    this.classroomService.getClassrooms().subscribe((resData) => {
      this.displayedColumns = Object.keys(resData[0]);
      this.displayedColumns.push("edit");
      this.displayedColumns.push("edit2");
      this.tableData = resData;
      this.dataSource = new MatTableDataSource(this.tableData);

    });
  }

  deleteClassroom(id) {
    this.classroomService.deleteCourse(id).subscribe(() => {
      this.buildTable();
    });

  }

  onSubmit(formValue) {
    console.warn(this.classroomForm.value);
    this.addClassroom(this.classroomForm.value.roomName, this.classroomForm.value.roomNumber);
    this.buildTable();
  }


  addClassroom(roomName, roomNumber) {
    const course = new Classroom(roomName, roomNumber);
    this.classroomService.createClassroom(course).subscribe();

  }

  onSubmit2(formValue) {
    console.warn(this.updateForm.value);
    this.isEditMode = false;
    this.update(this.updateForm.value.roomName, this.updateForm.value.roomNumber);
  }

  edit(code) {
    this.roomCode = code;
    this.isEditMode = true;
  }

  update(roomName, roomNumber) {
    const cr = new Classroom(roomName, roomNumber);
    this.classroomService.updateClassroom(cr, this.roomCode).subscribe(() => this.buildTable());
  }

}
