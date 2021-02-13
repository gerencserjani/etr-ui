import { Injectable } from '@angular/core';
import { Educates } from '../models/educates';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EducatesService {

  constructor(private readonly apiService: ApiService) { }

  createEducate(educate: Educates) {
    return this.apiService.executeSql("INSERT INTO educates (teachers_neptun_code ,course_code) VALUES('" + educate.teachers_neptun_code + "','" + educate.course_code + "')");
  }

  deleteEducate(id1, id2) {
    return this.apiService.executeSql("DELETE FROM educates WHERE teachers_neptun_code  = '" + id1 + "' AND course_code = '" + id2 + "'");
  }

  getEducate() {
    return this.apiService.executeSql("SELECT * FROM educates");
  }
}
