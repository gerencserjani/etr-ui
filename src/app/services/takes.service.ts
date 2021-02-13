import { Injectable } from '@angular/core';
import { Takes } from '../models/takes';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TakesService {

  constructor(private readonly apiService: ApiService) { }

  createTake(take: Takes) {
    return this.apiService.executeSql("INSERT INTO takes (students_neptun_code,course_code) VALUES('" + take.student_neptun_code + "','" + take.course_code + "')");
  }

  deleteTake(id1, id2) {
    return this.apiService.executeSql("DELETE FROM takes WHERE students_neptun_code = '" + id1 + "' AND course_code = '" + id2 + "'");
  }

  getTake() {
    return this.apiService.executeSql("SELECT * FROM takes");
  }

  getTakeByCode(id) {
    return this.apiService.executeSql("SELECT course_code FROM takes WHERE students_neptun_code = " + id);
  }
}
