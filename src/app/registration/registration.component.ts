
import { Teacher, User, Student } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  registrationForm = new FormGroup({
    fname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl(''),
    birth_date: new FormControl(''),
    sex: new FormControl('')
  });

  warningMessage = false;
  hide = true;
  isStudent;


  constructor(private router: Router, private readonly userService: UserService) { }

  ngOnInit(): void {
  }


  student() {
    this.isStudent = 1;
  }
  teacher() {
    this.isStudent = 0;
  }

  onSubmit(formValue) {
    console.warn(this.registrationForm.value);

    this.registration(this.registrationForm.value.fname, this.registrationForm.value.email, this.registrationForm.value.password, this.registrationForm.value.birth_date, this.registrationForm.value.sex)
  }

  registration(fullName, email, password, birth_date, sex) {
    if (fullName == '' || email == '' || password == '' || birth_date == '' || sex == '') {
      this.warningMessage = true;
    } else {
      this.warningMessage = false;
      const user = new User(fullName, email, password, birth_date, sex, this.isStudent);
      this.userService.createUser(user).subscribe((adat: any) => {
        if (this.isStudent == 1) {
          const student = new Student(adat.insertId);
          this.userService.createStudent(student).subscribe();
        } else if (this.isStudent == 0) {
          const teacher = new Teacher(adat.insertId);
          this.userService.createTeacher(teacher).subscribe();
        }
      });
      this.router.navigate(['./login']);
    }
  }

  get email() { return this.registrationForm.get('email') };
}
