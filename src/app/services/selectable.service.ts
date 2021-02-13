import { Injectable } from '@angular/core';
import { Selectable } from '../models/selectable';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class SelectableService {

  constructor(private readonly apiService: ApiService) { }

  createSelectable(selectable: Selectable) {
    return this.apiService.executeSql("INSERT INTO selectable (major_name,course_code) VALUES('" + selectable.major_name + "','" + selectable.course_code + "')");
  }

  deleteSelectable(id1, id2) {
    return this.apiService.executeSql("DELETE FROM selectable WHERE major_name = '" + id1 + "' AND course_code = '" + id2 + "'");
  }

  getSelectable() {
    return this.apiService.executeSql("SELECT * FROM selectable");
  }
}
