import { TeachingService } from './../../services/teaching.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  tableData;
  dataSource;
  displayedColumns: string[];

  tableData2;
  dataSource2;
  displayedColumns2: string[];

  tableData3;
  dataSource3;
  displayedColumns3: string[];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly teachingService: TeachingService) {
    this.numberOfStudentsPerCourse();
    this.takenCreditPerStudent();
    this.allStudentsAVGCreditNumber();
  }

  ngOnInit(): void {
  }


  numberOfStudentsPerCourse() {
    this.teachingService.numberOfStudentsPerCourse().subscribe((resData) => {
      this.displayedColumns = Object.keys(resData[0]);
      this.tableData = resData;
      this.dataSource = new MatTableDataSource(this.tableData);
    });
  }

  takenCreditPerStudent() {
    this.teachingService.takenCreditPerStudent().subscribe((resData) => {
      this.displayedColumns2 = Object.keys(resData[0]);
      this.tableData2 = resData;
      this.dataSource2 = new MatTableDataSource(this.tableData2);
    });
  }


  allStudentsAVGCreditNumber() {
    this.teachingService.allStudentsAVGCreditNumber().subscribe((resData) => {
      this.displayedColumns3 = Object.keys(resData[0]);
      this.tableData3 = resData;
      this.dataSource3 = new MatTableDataSource(this.tableData3);
    });
  }

}
