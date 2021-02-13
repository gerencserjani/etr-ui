import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  HOST = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  executeSql(sqlQuery: string) {
    return this.http.post(this.HOST + '/execute', { sql: sqlQuery });
  }

  get(endpoint) {
    return this.http.get(this.HOST + endpoint);
  }

  post(endpoint, data) {
    return this.http.post(this.HOST + endpoint, data);
  }

  put(endpoint, data) {
    return this.http.put(this.HOST + endpoint, data);
  }

  del(endpoint) {
    return this.http.delete(this.HOST + endpoint);
  }

  patch(endpoint, body) {
    return this.http.patch(this.HOST + endpoint, body);
  }

}
