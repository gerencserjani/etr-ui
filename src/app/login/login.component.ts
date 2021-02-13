
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl(''),
  });

  warningMessage = false;
  error = "";
  hide = true;

  constructor(private readonly auth: AuthService, private readonly api: ApiService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {

  }

  err: String;
  onSubmit(formValue) {
    console.warn(this.loginForm.value);

    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res: any) => {
      console.log(res);
      if (res.length > 0) {
        this.auth.login(res[0].neptun_code, res[0].isStudent)
        console.log("Access granted", localStorage.getItem("userId"));
        this.router.navigate(['./education-data']);
      } else {
        this.err = "Bad password or email";
      }
    })
  }

  get email() { return this.loginForm.get('email') };

}
