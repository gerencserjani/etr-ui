import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserId() {
    return localStorage.getItem("userId");
  }

  saveUserInfo(userId, isStudent) {
    localStorage.setItem("isStudent", isStudent);
    localStorage.setItem("userId", userId);
  }

  deleteUserInfo() {
    localStorage.setItem("isStudent", null);
    localStorage.setItem("userId", null);
  }

  isLogged() {
    return this.isTeacher() || this.isStudent() || this.isAdmin();
  }

  isTeacher() {
    if (localStorage.getItem("isStudent") == "0") {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (localStorage.getItem("isStudent") == "2") {
      return true;
    } else {
      return false;
    }
  }

  isStudent() {
    if (localStorage.getItem("isStudent") == "1") {
      return true;
    } else {
      return false;
    }
  }

  login(userId, isStudent) {
    this.saveUserInfo(userId, isStudent);
  }

  logout() {
    this.deleteUserInfo();
  }
}
