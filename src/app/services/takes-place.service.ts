import { TakePlace } from './../models/takePlace';
import { ApiService } from 'src/app/services/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TakesPlaceService {

  constructor(private readonly apiService: ApiService) { }

  createTakePlace(takePlace: TakePlace) {
    return this.apiService.executeSql("INSERT INTO takes_place (classroom_code,course_code) VALUES('" + takePlace.classroom_code + "','" + takePlace.course_code + "')");
  }

  deleteTakePlace(id1, id2) {
    return this.apiService.executeSql("DELETE FROM takes_place WHERE classroom_code = '" + id1 + "' AND course_code = '" + id2 + "'");
  }

  getTakePlace() {
    return this.apiService.executeSql("SELECT * FROM takes_place");
  }
}
