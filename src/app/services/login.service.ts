import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly apiService: ApiService) {

  }

  login(email, password) {
    return this.apiService.executeSql("SELECT * FROM users WHERE email = '" + email + "'AND password = '" + password + "'");
  }
}
