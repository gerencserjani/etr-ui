import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Classroom } from '../models/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  constructor(private readonly apiService: ApiService) { }


  createClassroom(classroom: Classroom) {
    return this.apiService.executeSql("INSERT INTO classrooms (roomName,roomNumber) VALUES('" + classroom.roomName + "','" + classroom.roomNumber + "')");
  }

  deleteCourse(id) {
    return this.apiService.executeSql("DELETE FROM classrooms WHERE code = " + id);
  }

  getClassrooms() {
    return this.apiService.executeSql("SELECT * FROM classrooms");
  }

  getClassroomById() {

  }

  updateClassroom(classroom: Classroom, code) {
    return this.apiService.executeSql("UPDATE classrooms SET roomName = '" + classroom.roomName + "' , roomNumber = '" + classroom.roomNumber + "' WHERE code = " + code);
  }
}
