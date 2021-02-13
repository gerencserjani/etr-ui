import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TeachingService {

  constructor(private readonly apiService: ApiService) { }

  numberOfStudentsPerCourse() {
    return this.apiService.executeSql("SELECT courses.name , takes.course_code,COUNT(*) as 'Number_of_students' FROM takes,courses WHERE takes.course_code = courses.course_code GROUP BY(course_code) ORDER BY courses.name");
  }

  takenCreditPerStudent() {
    return this.apiService.executeSql("SELECT users.fullName as Student_name, takes.students_neptun_code,SUM(courses.creditNumber) as 'Sum_credit_number' FROM takes,users,courses, students WHERE users.neptun_code = students.user_neptun_code AND students.user_neptun_code = takes.students_neptun_code AND takes.course_code = courses.course_code GROUP BY takes.students_neptun_code ORDER BY 'Sum_credit_number'");
  }

  allStudentsAVGCreditNumber() {
    return this.apiService.executeSql("SELECT AVG(Sum_credit_number) FROM(SELECT users.fullName as Student_name, takes.students_neptun_code,SUM(courses.creditNumber) as 'Sum_credit_number' FROM takes,users,courses, students WHERE users.neptun_code = students.user_neptun_code AND students.user_neptun_code = takes.students_neptun_code AND takes.course_code = courses.course_code GROUP BY takes.students_neptun_code ORDER BY 'Sum_credit_number') as SumCredit");
  }

}
