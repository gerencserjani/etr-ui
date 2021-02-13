import { MajorsService } from './../../services/majors.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Major, MajorNoName } from 'src/app/models/major';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.css']
})
export class MajorsComponent implements OnInit {

  majorForm = new FormGroup({
    name: new FormControl(''),
    institution: new FormControl(''),
    faculty: new FormControl('')
  });

  updateForm = new FormGroup({
    institution: new FormControl(''),
    faculty: new FormControl(''),
  });

  tableData;
  dataSource;
  displayedColumns: string[];
  majorCode;
  isEditMode = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly majorService: MajorsService) {
    this.buildTable();

  }
  ngOnInit(): void {
  }

  buildTable() {
    this.majorService.getMajor().subscribe((resData) => {
      this.displayedColumns = Object.keys(resData[0]);
      this.displayedColumns.push("edit");
      this.displayedColumns.push("edit2");
      this.tableData = resData;
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.sort = this.sort;
    });
  }


  deleteMajor(id) {
    this.majorService.deleteMajor(id).subscribe(() => {
      this.buildTable();
    });

  }

  onSubmit(formValue) {
    console.warn(this.majorForm.value);
    this.addMajor(this.majorForm.value.name, this.majorForm.value.institution, this.majorForm.value.faculty);
  }


  addMajor(name, institution, faculty) {
    const major = new Major(name, institution, faculty);
    this.majorService.createMajor(major).subscribe();
  }



  onSubmit2(formValue) {
    console.warn(this.updateForm.value);
    this.isEditMode = false;
    this.update(this.updateForm.value.institution, this.updateForm.value.faculty);
  }

  edit(code) {
    this.majorCode = code;
    this.isEditMode = true;
  }

  update(institution, faculty) {
    const majr = new MajorNoName(institution, faculty);
    this.majorService.updateMajor(majr, this.majorCode).subscribe(() => this.buildTable());
  }
}
