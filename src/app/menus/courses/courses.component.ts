import { SelectableService } from './../../services/selectable.service';
import { TakesPlaceService } from './../../services/takes-place.service';
import { TakePlace } from './../../models/takePlace';
import { MajorsService } from './../../services/majors.service';
import { ClassroomsService } from './../../services/classrooms.service';
import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course';
import { MatTableDataSource } from '@angular/material/table';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ClassroomWithCode } from 'src/app/models/classroom';
import { Major } from 'src/app/models/major';
import { Selectable } from 'src/app/models/selectable';

@Component({

  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  updateForm = new FormGroup({
    name: new FormControl(''),
    creditNumber: new FormControl(''),
  });


  isEditMode = false;
  tableData;
  dataSource;
  displayedColumns: string[];
  roomNames = [];
  majorNames = [];
  courseCode;

  selectedMajorCode;
  selectedRoomCode;

  rooms = [];

  user: any;


  courseForm = new FormGroup({
    name: new FormControl(''),
    creditNumber: new FormControl(''),
  });


  constructor(private readonly courseService: CourseService,
    private readonly classroomService: ClassroomsService,
    private readonly majorService: MajorsService,
    private readonly takesPlace: TakesPlaceService,
    private readonly selectableService: SelectableService) {
    this.buildTable();
  }

  buildTable() {
    this.courseService.getCourses().subscribe((resData) => {
      this.displayedColumns = Object.keys(resData[0]);
      this.displayedColumns.push("classroom");
      this.displayedColumns.push("major");
      this.displayedColumns.push("edit");
      this.displayedColumns.push("edit2");
      this.displayedColumns.push("edit3");
      this.tableData = resData;
      this.dataSource = new MatTableDataSource(this.tableData);

    });
    this.classroomService.getClassrooms().subscribe((r) => {
      this.rooms.push(r);
    });


    this.classroomService.getClassrooms().subscribe((classData) => {
      // tslint:disable-next-line: forin
      for (let key in classData) {
        let newClassroom = new ClassroomWithCode(classData[key].roomName, classData[key].roomNumber, classData[key].code);
        this.roomNames.push(newClassroom);
      }
    });

    this.majorService.getMajor().subscribe((majorData) => {
      // tslint:disable-next-line: forin
      for (let key in majorData) {
        let newMajor = new Major(majorData[key].name, majorData[key].institution, majorData[key].faculty);
        this.majorNames.push(newMajor);
      }
    });
  }

  ngOnInit(): void {

  }

  deleteCourse(id) {
    this.courseService.deleteCourse(id).subscribe(() => { });
    this.takesPlace.deleteTakePlace(this.selectedRoomCode, id).subscribe(() => { });
    this.selectableService.deleteSelectable(this.selectedMajorCode, id).subscribe(() => { });
    this.buildTable();
  }

  onSubmit(formValue) {
    console.warn(this.courseForm.value);
    this.addCourse(this.courseForm.value.name, this.courseForm.value.creditNumber);
  }


  addCourse(name, creditNumber) {
    const course = new Course(name, creditNumber);
    this.courseService.createCourse(course).subscribe();
  }

  addTakePlaceBasic(course_code) {
    const tp = new TakePlace(this.selectedRoomCode, course_code);
    this.takesPlace.createTakePlace(tp).subscribe();
  }

  addMajorToSelectable(course_code) {
    const selectable = new Selectable(this.selectedMajorCode, course_code);
    this.selectableService.createSelectable(selectable).subscribe();
  }

  //gets the code value of the selected classroom/major
  selectedRoom(event: any) {
    {
      if (event.isUserInput) {
        this.selectedRoomCode = event.source.value.code;
      }
    }
  }
  //gets the code value of the selected classroom/major
  selectedMajor(event: any) {
    {
      if (event.isUserInput) {
        this.selectedMajorCode = event.source.value.name;
      }
    }
  }

  //change button
  change(id) {
    this.addTakePlaceBasic(id);
    this.addMajorToSelectable(id);
  }

  onSubmit2(formValue) {
    console.warn(this.updateForm.value);
    this.isEditMode = false;
    this.update(this.updateForm.value.name, this.updateForm.value.creditNumber);
  }

  edit(code) {
    this.courseCode = code;
    this.isEditMode = true;
  }

  update(name, creditNumber) {
    const crs = new Course(name, creditNumber);
    this.courseService.updateCourse(crs, this.courseCode).subscribe(() => this.buildTable());
  }

}
