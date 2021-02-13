import { UsersComponent } from './menus/users/users.component';
import { TeachingComponent } from './menus/teaching/teaching.component';
import { SubjectAdmissionComponent } from './menus/subject-admission/subject-admission.component';
import { MajorsComponent } from './menus/majors/majors.component';
import { EducationDataComponent } from './menus/education-data/education-data.component';
import { CoursesComponent } from './menus/courses/courses.component';
import { ClassroomsComponent } from './menus/classrooms/classrooms.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'classrooms', component: ClassroomsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'education-data', component: EducationDataComponent },
  { path: 'majors', component: MajorsComponent },
  { path: 'subject-admission', component: SubjectAdmissionComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
