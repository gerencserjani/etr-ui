import { Teacher, Student, User } from './../models/user';
import { ApiService } from 'src/app/services/api.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly apiService: ApiService) {



  }
  getUser(id: number) {
    return this.apiService.executeSql("SELECT * FROM users WHERE neptun_code = " + id);
  }

  getUsers() {
    return this.apiService.executeSql("SELECT * FROM users");
  }

  deleteUser(id) {
    return this.apiService.executeSql("DELETE FROM users WHERE neptun_code = " + id);
  }

  deleteUsers() {
    return this.apiService.executeSql("DELETE FROM users");
  }

  createUser(user: User) {
    return this.apiService.executeSql("INSERT INTO users (fullName,email,password,birth_date,sex,isStudent) VALUES('" + user.fullName + "','" + user.email + "','" + user.password + "','2020-11-11T23:00:00.000Z','" + user.sex + "','" + user.isStudent + "')");
  }

  createStudent(student: Student) {
    return this.apiService.executeSql("INSERT INTO students (user_neptun_code) VALUES('" + student.user_neptun_code + "')");
  }

  createTeacher(teacher: Teacher) {
    return this.apiService.executeSql("INSERT INTO teachers (user_neptun_code) VALUES('" + teacher.user_neptun_code + "')");
  }

  upDateUser(user: User, neptun_code) {
    return this.apiService.executeSql("UPDATE users SET fullName = '" + user.fullName + "' , email = '" + user.email + "', password = '" + user.password + "' WHERE neptun_code = " + neptun_code);
  }

  getTakeCourses() {
    return this.apiService.executeSql("SELECT * FROM takes,users,courses WHERE users.neptun_code= '" + localStorage.getItem("userId") + "' AND users.neptun_code = takes.students_neptun_code AND takes.course_code = courses.course_code");
  }

  getEducateCourses() {
    return this.apiService.executeSql("SELECT * FROM educates,users,courses WHERE users.neptun_code= '" + localStorage.getItem("userId") + "' AND users.neptun_code = educates.teachers_neptun_code AND educates.course_code = courses.course_code");
  }

}
