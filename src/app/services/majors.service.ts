import { ApiService } from 'src/app/services/api.service';
import { Major, MajorNoName } from './../models/major';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MajorsService {

  constructor(private readonly apiService: ApiService) { }


  createMajor(major: Major) {
    return this.apiService.executeSql("INSERT INTO majors (name,institution,faculty) VALUES('" + major.name + "','" + major.institution + "','" + major.faculty + "')");
  }

  deleteMajor(id) {
    return this.apiService.executeSql("DELETE FROM majors WHERE name = '" + id + "'");
  }

  getMajor() {
    return this.apiService.executeSql("SELECT * FROM majors");
  }

  updateMajor(major: MajorNoName, name) {
    return this.apiService.executeSql("UPDATE majors SET institution = '" + major.institution + "' , faculty = '" + major.faculty + "' WHERE name = '" + name + "'");
  }
}
