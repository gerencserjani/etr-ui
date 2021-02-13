
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  tableData;
  dataSource;
  displayedColumns: string[];

  constructor(private readonly api: ApiService, private readonly userService: UserService) {

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.buildTable();
  }

  buildTable() {
    this.userService.getUsers().subscribe((resData) => {
      this.displayedColumns = Object.keys(resData[0]);
      this.displayedColumns.push("edit");
      this.tableData = resData;
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.paginator = this.paginator;

    });
  }

  deleteUsers() {

    this.userService.deleteUsers().subscribe(() => {
      this.buildTable();
    });

  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.buildTable();
    });

  }
}

