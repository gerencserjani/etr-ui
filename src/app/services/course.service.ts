import { ApiService } from './api.service';
import { Course } from './../models/course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private readonly apiService: ApiService) { }

  createCourse(course: Course) {
    return this.apiService.executeSql("INSERT INTO courses (name,creditNumber) VALUES('" + course.name + "','" + course.creditNumber + "')");
  }

  deleteCourse(id) {
    return this.apiService.executeSql("DELETE FROM courses WHERE course_code = " + id);
  }

  getCourses() {
    return this.apiService.executeSql("SELECT * FROM courses");
  }

  getCourseId(id) {
    return this.apiService.executeSql("SELECT* FROM courses WHERE course_code=" + id);
  }

  updateCourse(course: Course, code) {
    return this.apiService.executeSql("UPDATE courses SET name = '" + course.name + "' , creditNumber = '" + course.creditNumber + "' WHERE course_code = " + code);
  }

}
